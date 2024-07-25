function addCard() {
    const template = document.getElementById('card-template').content;
    const clone = document.importNode(template, true);
    const container = document.getElementById('cards-container');
    container.appendChild(clone);
    updateHealth(container.querySelector('.card:last-child .health-value'));
}

function deleteCard(button) {
    const card = button.closest('.card');
    card.parentNode.removeChild(card);
}

function saveCards() {
    const cards = Array.from(document.querySelectorAll('.card'));
    const data = cards.map(card => {
        return {
            title: card.querySelector('.editable-title').value,
            class: card.querySelector('.class').value,
            level: card.querySelector('.level').value,
            race: card.querySelector('.race').value,
            background: card.querySelector('.background').value,
            alignment: card.querySelector('.alignment').value,
            abilities: card.querySelector('.abilities').value,
            equipment: card.querySelector('.equipment').value,
            notes: card.querySelector('.notes').value,
            health: card.querySelector('.health-value').value,
            accentColor: card.dataset.accentColor || '#28a745'
        };
    });

    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'dnd_player_sheets.sav';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function loadCards(input) {
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
        const data = JSON.parse(event.target.result);
        const container = document.getElementById('cards-container');
        container.innerHTML = '';
        data.forEach(item => {
            const template = document.getElementById('card-template').content;
            const clone = document.importNode(template, true);
            const card = clone.querySelector('.card');
            card.dataset.accentColor = item.accentColor;
            card.querySelector('.editable-title').value = item.title;
            card.querySelector('.class').value = item.class;
            card.querySelector('.level').value = item.level;
            card.querySelector('.race').value = item.race;
            card.querySelector('.background').value = item.background;
            card.querySelector('.alignment').value = item.alignment;
            card.querySelector('.abilities').value = item.abilities;
            card.querySelector('.equipment').value = item.equipment;
            card.querySelector('.notes').value = item.notes;
            card.querySelector('.health-value').value = item.health;
            container.appendChild(clone);
            changeCardAccentColor(card.querySelector(`.settings-menu .color-picker div[style*="${item.accentColor}"]`));
            updateHealth(card.querySelector('.health-value'));
        });
    };
    reader.readAsText(file);
}

function adjustHealth(button, change) {
    const card = button.closest('.card');
    const healthValueElement = card.querySelector('.health-value');
    let [current, max] = healthValueElement.value.split('/').map(Number);
    if (isNaN(current)) current = 0;
    if (isNaN(max)) max = 100;
    current = Math.max(0, Math.min(max, current + change));
    healthValueElement.value = `${current}/${max}`;
    updateHealth(healthValueElement);
}

function updateHealth(input) {
    const card = input.closest('.card');
    let [current, max] = input.value.split('/').map(Number);
    if (isNaN(current)) current = 0;
    if (isNaN(max)) max = 100;
    const healthPercentage = (current / max) * 100;
    const healthSquaresContainer = card.querySelector('.health-squares');
    const cardWidth = card.offsetWidth;
    const squareSize = Math.max(Math.floor(cardWidth / max - 2), 8); // Adjust size dynamically

    // Set the square size as a CSS variable
    healthSquaresContainer.style.setProperty('--square-size', `${squareSize}px`);

    healthSquaresContainer.innerHTML = '';
    for (let i = 0; i < max; i++) {
        const square = document.createElement('div');
        square.classList.add('health-square');
        if (i < current) {
            if (healthPercentage < 10) {
                square.classList.add('red');
            } else if (healthPercentage < 40) {
                square.classList.add('yellow');
            } else {
                square.classList.add('green');
            }
        } else {
            square.classList.add('black');
        }
        healthSquaresContainer.appendChild(square);
    }
}

function toggleSettingsMenu(button) {
    const settingsMenu = button.nextElementSibling;
    settingsMenu.style.display = settingsMenu.style.display === 'block' ? 'none' : 'block';
}

function changeCardAccentColor(div) {
    const card = div.closest('.card');
    const color = div.style.backgroundColor;
    card.dataset.accentColor = color;
    card.querySelectorAll('input, textarea').forEach(element => {
        element.style.borderColor = color;
        element.classList.add('accented');
    });
}

function updateCardTitle(input) {
    const card = input.closest('.card');
    card.querySelector('.editable-title').value = input.value;
}

function moveCard(button, direction) {
    const card = button.closest('.card');
    const container = document.getElementById('cards-container');
    const cards = Array.from(container.querySelectorAll('.card'));
    const index = cards.indexOf(card);

    if (direction === -1 && index > 0) {
        container.insertBefore(card, cards[index - 1]);
    } else if (direction === 1 && index < cards.length - 1) {
        container.insertBefore(card, cards[index + 2] || null);
    }
}
