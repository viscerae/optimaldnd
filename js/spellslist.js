document.addEventListener('DOMContentLoaded', () => {
    const spells = [
        {
            name: 'teste',
            type:'teste',
            image: '', 
            stats: `teste`,
            info: `teste`,
        },

        // Add more spells as needed
    ];

    const spellList = document.getElementById('spells-list');
    const spellsDetails = document.getElementById('spells-details');
    const searchBar = document.getElementById('search-bar');

    function displaySpellDetails(spell) {
        spellDetails.innerHTML = `
            <h2>${spell.name}</h2>
            <h3>${spell.type}</h3>
            <img src="${spell.image}" alt="${spell.name}">
            <div class="tab">
                <button class="tablinks" onclick="openTab(event, 'Stats')">Stats</button>
                <button class="tablinks" onclick="openTab(event, 'Info')">Info</button>
            </div>
            <div id="Stats" class="tabcontent">
                ${spell.stats}
            </div>
            <div id="Info" class="tabcontent">
                ${spell.info}
            </div>
        `;
        document.querySelector('.tablinks').click();
    }

    function populateSpellsList(spells) {
        spellsList.innerHTML = '';
        spells.forEach(spell => {
            const listItem = document.createElement('li');
            listItem.textContent = spell.name;
            listItem.addEventListener('click', () => displaySpellDetails(spell));
            spellList.appendChild(listItem);
        });
    }

    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredSpells = spells.filter(spell => spell.name.toLowerCase().includes(searchTerm));
        populateSpellList(filteredSpells);
    });

    populateSpellsList(spells);

    window.openTab = function(evt, tabName) {
        const tabcontent = document.getElementsByClassName("tabcontent");
        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        const tablinks = document.getElementsByClassName("tablinks");
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }
});
