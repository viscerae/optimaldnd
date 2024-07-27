document.addEventListener('DOMContentLoaded', () => {
    const monsters = [
        {
            name: 'Aarakocra',
            type:'Medium Humanoid (Aarakocra), Neutral Good',
            image: '/images/monsterlist/Aarakocra.png', // Replace with actual image URL
            stats: `
                <strong>Armor Class:</strong> 12<br>
                <strong>Hit Points:</strong> 13 (3d8)<br>
                <strong>Speed:</strong> 20 ft., fly 50 ft.<br><br>
                <strong>STR:</strong> 10 (+0) &nbsp;&nbsp; 
                <strong>DEX:</strong> 14 (+2) &nbsp;&nbsp; 
                <strong>CON:</strong> 10 (+0) &nbsp;&nbsp; 
                <strong>INT:</strong> 11 (+0) &nbsp;&nbsp; 
                <strong>WIS:</strong> 12 (+1) &nbsp;&nbsp; 
                <strong>CHA:</strong> 11 (+0)<br><br>
                <strong>Skills:</strong> Perception +5<br>
                <strong>Senses:</strong> passive Perception 15<br>
                <strong>Languages:</strong> Auran, Aarakocra<br>
                <strong>Challenge:</strong> 1/4 (50 XP)<br>
                <strong>Proficiency Bonus:</strong> +2<br><br>
                <strong>Dive Attack:</strong> If the aarakocra is flying and dives at least 30 feet straight toward a target and then hits it with a melee weapon attack, the attack deals an extra 3 (1d6) damage to the target.<br><br>
                <strong>Actions:</strong><br>
                <strong>Talon:</strong> Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage.<br>
                <strong>Javelin:</strong> Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage.<br><br>
                <strong>Summon Air Elemental:</strong> Five aarakocra within 30 feet of each other can magically summon an air elemental. Each of the five must use its action and movement on three consecutive turns to perform an aerial dance and must maintain concentration while doing so (as if concentrating on a spell). When all five have finished their third turn of the dance, the elemental appears in an unoccupied space within 60 feet of them. It is friendly toward them and obeys their spoken commands. It remains for 1 hour, until it or all its summoners die, or until any of its summoners dismisses it as a bonus action. A summoner can't perform the dance again until it finishes a short rest. When the elemental returns to the Elemental Plane of Air, any aarakocra within 5 feet of it can return with it.<br><br>
                <strong>Environment:</strong> Mountain<br>
                <strong>Source:</strong> MM, page 12. Also found in PotA; SKT; ToA; EGW; IDRotF; CRCotN; LoX; QftIS.
            `,
            info: `
                Aarakocra range the Howling Gyre, an endless storm of mighty winds and lashing rains that surrounds the tranquil realm of Aaqa in the Elemental Plane of Air. Making aerial patrols, these birdlike humanoids guard the windy borders of their home against invaders from the Elemental Plane of Earth, such as gargoyles, their sworn enemies.<br><br>
                
                <strong>Enemies of Elemental Evil:</strong> In service to the Wind Dukes of Aaqa, aarakocra scout the planes in search of temples of Elemental Evil. They spy on malign elemental creatures and then either take the fight to those creatures or report back to the Wind Dukes.<br><br>
                
                On the Material Plane, aarakocra create aeries atop the highest mountains, especially peaks near portals to the Elemental Plane of Air. From such heights, aarakocra watch for signs of elemental incursions, as well as for nascent threats to their home plane. Aarakocra prefer to live their lives like the wind-unburdened and ever moving-yet they watch over a region for years if that's what it takes to guard against the incursions of Elemental Evil.<br><br>
                
                Aarakocra have no concept of political borders or property ownership, and the value of gems, gold, and other precious materials means little to aarakocra. In their eyes, a creature should use what is necessary and then cast what is left on the wind for others to use.<br><br>
                
                <strong>Search for the Seven Shards:</strong> The Wind Dukes of Aaqa come from a race of elemental beings called the vaati, which once ruled many worlds. A creature known as the Queen of Chaos arose and initiated an interplanar war against vaati rule. To combat the threat, seven vaati heroes combined their powers to create the mighty Rod of Law. In a battle against the queen's greatest general, Mishka the Wolf Spider, a vaati killed Mishka by thrusting the rod into him like a spear. The rod shattered into seven shards that scattered across the multiverse. Aaracokra seek signs of the pieces' locations in order to rebuild what is now known as the Rod of Seven Parts.
            `,
        },
        {
            name: 'Aarakocra Simulacrum',
            type: 'Medium Humanoid (Aarakocra), Neutral Good',
            image: '/images/monsterlist/Aarakocra_Simulacrum.png', // Replace with actual image URL
            stats: `
                <strong>Armor Class:</strong> 12<br>
                <strong>Hit Points:</strong> 6 (3d4)<br>
                <strong>Speed:</strong> 20 ft., fly 50 ft.<br><br>
                <strong>STR:</strong> 10 (+0) &nbsp;&nbsp; 
                <strong>DEX:</strong> 14 (+2) &nbsp;&nbsp; 
                <strong>CON:</strong> 10 (+0) &nbsp;&nbsp; 
                <strong>INT:</strong> 11 (+0) &nbsp;&nbsp; 
                <strong>WIS:</strong> 12 (+1) &nbsp;&nbsp; 
                <strong>CHA:</strong> 11 (+0)<br><br>
                <strong>Skills:</strong> Perception +5<br>
                <strong>Senses:</strong> Passive Perception 15<br>
                <strong>Languages:</strong> Auran, Aarakocra<br>
                <strong>Challenge:</strong> 1/8 (25 XP)<br>
                <strong>Proficiency Bonus:</strong> +2<br><br>
                <strong>Dive Attack:</strong> If the aarakocra is flying and dives at least 30 feet straight toward a target and then hits it with a melee weapon attack, the attack deals an extra 3 (1d6) damage to the target.<br><br>
                <strong>Simulacra:</strong> When a simulacrum drops to 0 hit points or is subjected to a successful dispel magic spell (DC 17), it reverts to ice and snow and is destroyed.<br>
                <strong>Actions:</strong><br>
                <strong>Talon:</strong> Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage.<br>
                <strong>Javelin:</strong> Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage.<br><br>
                <strong>Summon Air Elemental:</strong> Five aarakocra within 30 feet of each other can magically summon an air elemental. Each of the five must use its action and movement on three consecutive turns to perform an aerial dance and must maintain concentration while doing so (as if concentrating on a spell). When all five have finished their third turn of the dance, the elemental appears in an unoccupied space within 60 feet of them. It is friendly toward them and obeys their spoken commands. It remains for 1 hour, until it or all its summoners die, or until any of its summoners dismisses it as a bonus action. A summoner can't perform the dance again until it finishes a short rest. When the elemental returns to the Elemental Plane of Air, any aarakocra within 5 feet of it can return with it.<br><br>
                <strong>Source:</strong> SKT, page 188
            `,
            info: ` None `,
        },
        // Add more monsters as needed
    ];

    const monsterList = document.getElementById('monster-list');
    const monsterDetails = document.getElementById('monster-details');
    const searchBar = document.getElementById('search-bar');

    function displayMonsterDetails(monster) {
        monsterDetails.innerHTML = `
            <h2>${monster.name}</h2>
            <h3>${monster.type}</h3>
            <img src="${monster.image}" alt="${monster.name}">
            <div class="tab">
                <button class="tablinks" onclick="openTab(event, 'Stats')">Stats</button>
                <button class="tablinks" onclick="openTab(event, 'Info')">Info</button>
            </div>
            <div id="Stats" class="tabcontent">
                ${monster.stats}
            </div>
            <div id="Info" class="tabcontent">
                ${monster.info}
            </div>
        `;
        document.querySelector('.tablinks').click();
    }

    function populateMonsterList(monsters) {
        monsterList.innerHTML = '';
        monsters.forEach(monster => {
            const listItem = document.createElement('li');
            listItem.textContent = monster.name;
            listItem.addEventListener('click', () => displayMonsterDetails(monster));
            monsterList.appendChild(listItem);
        });
    }

    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchTerm));
        populateMonsterList(filteredMonsters);
    });

    populateMonsterList(monsters);

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
