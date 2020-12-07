import React, {useState, useEffect} from 'react';
import Logo from '../../images/DnDLogo.jpg'
import './App.css';
import FiltersList from '../Filters/FiltersList.js';
import Spell from '../Spell/Spell.js';
import allSpells from '../SpellLists/AllSpells.js';
import SearchBox from '../Searchbox/Searchbox.js';


function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredSpells, setFilteredSpells] = useState(allSpells);
    const [spellsToDisplay, setSpellsToDisplay] = useState(allSpells);
    const [activeFilters, setActiveFilters] = useState([]);

    useEffect(() => {
        console.log("useEffect Activated")
    }, [spellsToDisplay]);

    const remove = (spell) => {
        setSpellsToDisplay(spellsToDisplay.filter(s => s.spellName !== spell.spellName))
    }

    const filterSpells = function(filters) {
        if(filters && filters.length > 0) {
            if(searchTerm && searchTerm.length > 0){
                let filteredSpellsArray = [];

                spellsToDisplay.forEach((spell) => {
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
                let filteredSpellsArray = [];

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
                spellsToDisplay={spellsToDisplay}
                setSpellsToDisplay={setSpellsToDisplay}
                setSearchTerm={setSearchTerm}
                activeFilters={activeFilters}
                allSpells={allSpells}
                filterSpells={filterSpells}
            />

            <FiltersList
                spells={filteredSpells}
                activeFilters={activeFilters}
                setActiveFilters={setActiveFilters}
                filterSpells={filterSpells}
                spellsToDisplay={spellsToDisplay}
                setSpellsToDisplay={setSpellsToDisplay}
            />

            <div className="Spellbook">
                {spellsToDisplay.length < 1 ? <h2>No Spells Found</h2> :
                    spellsToDisplay.map(spell => (
                        <Spell
                            key={spell.spellName}
                            spell={spell}
                            remove={remove}
                        />
                    ))}
            </div>
        </div>
    );
}

export default App;
