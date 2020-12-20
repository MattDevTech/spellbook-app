import React, {useState, useEffect} from 'react';
import Logo from '../../images/DnDLogo.jpg'
import './App.css';
import FiltersList from '../Filters/FiltersList.js';
import Spell from '../Spell/Spell.js';
import allSpells from '../SpellLists/AllSpells.js';
import SearchBox from '../Searchbox/Searchbox.js';


function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [spellsToDisplay, setSpellsToDisplay] = useState(allSpells);
    const [activeFilters, setActiveFilters] = useState([]);

    const filterSpells = function(filters) {
        // debugger;
        if(filters && filters.length === 0 && searchTerm === ''){
            return allSpells
        }

        else if(filters && filters.length > 0) {

            let filteredSpellsArray = [];

            if(searchTerm && searchTerm.length > 0){
                allSpells.forEach((spell) => {
                    let include = false;

                    filters.forEach(filter => {
                        Object.values(spell).forEach(value => {
                            if (value === filter) {
                                include = true;
                                return;
                            }
                        });
                    });

                    if(include){
                        filteredSpellsArray.push(spell);
                    }
                });
        
                return filteredSpellsArray;
            }
            else {

                allSpells.forEach((spell) => {
                let include = false;

                filters.forEach(filter => {
                    Object.values(spell).forEach(value => {
                        if (value === filter) {
                            include = true;
                            return;
                        }
                    });
                });

                if(include){
                    filteredSpellsArray.push(spell);
                }
                });
        
                return filteredSpellsArray;
            }
        }
        else {
            return allSpells;
        }
    }

    return (
        <div className="Container">
            <div className="Header">
                <img src={Logo} width="250" alt="Logo"/>
                <h1 className="Spellbook-Header">Spellbook</h1>
            </div>

            <SearchBox
                setSpellsToDisplay={setSpellsToDisplay}
                setSearchTerm={setSearchTerm}
                activeFilters={activeFilters}
                allSpells={allSpells}
                filterSpells={filterSpells}
            />

            <FiltersList
                activeFilters={activeFilters}
                setActiveFilters={setActiveFilters}
                filterSpells={filterSpells}
                spellsToDisplay={spellsToDisplay}
                setSpellsToDisplay={setSpellsToDisplay}
            />

            <div className="Spellbook">
                {spellsToDisplay && spellsToDisplay.length < 1 ? <h2>No Spells Found</h2> :
                    spellsToDisplay.map(spell => (
                        <Spell
                            key={spell.spellName}
                            spell={spell}
                            spellsToDisplay={spellsToDisplay}
                            setSpellsToDisplay={setSpellsToDisplay}
                        />
                    ))}
            </div>
        </div>
    );
}

export default App;
