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
    try {
        // Select all cards
        const cards = Array.from(document.querySelectorAll('.card'));
        
        if (cards.length === 0) {
            console.log("No cards found.");
            return;
        }

        // Collect data from each card
        const data = cards.map(card => {
            return {
                title: card.querySelector('.editable-title')?.value || '',
                class: card.querySelector('.class')?.value || '',
                level: card.querySelector('.level')?.value || '',
                race: card.querySelector('.race')?.value || '',
                backgroundselector: card.querySelector('.backgroundselector')?.value || '',
                alignment: card.querySelector('.alignment')?.value || '',
                abilities: card.querySelector('.abilities')?.value || '',
                equipment: card.querySelector('.equipment')?.value || '',
                notes: card.querySelector('.notes')?.value || '',
                health: card.querySelector('.health-value')?.value || '',
                accentColor: card.dataset.accentColor || '#28a745'
            };
        });

        console.log("Data to be saved:", data);

        // Create a Blob with the data
        const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'dnd_player_sheets.sav';

        // Trigger the download
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        console.log("Download triggered.");
    } catch (error) {
        console.error("An error occurred while saving cards:", error);
    }
}


function loadCards() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.sav';
    input.onchange = event => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = e => {
            const data = JSON.parse(e.target.result);
            const container = document.getElementById('cards-container');
            container.innerHTML = ''; // Clear existing cards
            data.forEach(cardData => {
                const template = document.getElementById('card-template').content;
                const clone = document.importNode(template, true);
                const card = clone.querySelector('.card');
                
                card.querySelector('.editable-title').value = cardData.title;
                card.querySelector('.class').value = cardData.class;
                card.querySelector('.level').value = cardData.level;
                card.querySelector('.race').value = cardData.race;
                card.querySelector('.backgroundselector').value = cardData.backgroundselector;
                card.querySelector('.alignment').value = cardData.alignment;
                card.querySelector('.abilities').value = cardData.abilities;
                card.querySelector('.equipment').value = cardData.equipment;
                card.querySelector('.notes').value = cardData.notes;
                card.querySelector('.health-value').value = cardData.health;
                
                // Set accent color
                card.dataset.accentColor = cardData.accentColor || '#28a745';
                card.querySelectorAll('input, textarea, select').forEach(element => {
                    element.style.borderColor = card.dataset.accentColor;
                    element.classList.add('accented');
                });

                container.appendChild(clone);

                // Update health squares
                updateHealth(card.querySelector('.health-value'));
            });
        };
        reader.readAsText(file);
    };
    input.click();
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

function updateHealth(healthInput) {
    const card = healthInput.closest('.card');
    const healthSquaresContainer = card.querySelector('.health-squares');
    healthSquaresContainer.innerHTML = ''; // Clear existing squares
    
    const maxHealth = parseInt(healthInput.max, 10) || 100; // Assuming max health is set
    const currentHealth = parseInt(healthInput.value, 10) || 0;
    const healthPercentage = (currentHealth / maxHealth) * 100;

    for (let i = 0; i < maxHealth / 5; i++) {
        const square = document.createElement('div');
        square.classList.add('health-square');
        if (i < currentHealth / 5) {
            if (healthPercentage < 15) {
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

    // Convert RGB to Hex
    const rgbToHex = (rgb) => {
        let [r, g, b] = rgb.match(/\d+/g).map(Number);
        return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
    };
    
    const hexColor = rgbToHex(color);

    card.dataset.accentColor = hexColor;
    card.querySelectorAll('input, textarea, select').forEach(element => {
        element.style.borderColor = hexColor;
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
