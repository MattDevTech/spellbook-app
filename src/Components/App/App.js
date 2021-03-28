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
    const [activeSchoolFilters, setActiveSchoolFilters] = useState([]);
    const [activeLevelFilters, setActiveLevelFilters] = useState([]);
    const [activeEffectFilters, setActiveEffectFilters] = useState([]);


    const filterSpells = function(searchTerm = '', activeSchoolFilters = [], activeLevelFilters = [], activeEffectFilters = []) {
        if(activeSchoolFilters && activeSchoolFilters.length === 0 && activeLevelFilters && activeLevelFilters.length === 0 && activeEffectFilters && activeEffectFilters.length === 0 && searchTerm === ''){
            return allSpells
        }

        else{

            let filteredSpellsArray = [];
            let previouslyFilteredSpells = [];

            if(searchTerm.length !== 0){
                allSpells.forEach((spell) => {
                    let include = false;

                    if (spell.spellName.toLowerCase().includes(searchTerm.toLowerCase())) {
                        include = true;
                    };

                    if(include){
                        filteredSpellsArray.push(spell);
                    }
                });
            }

            if(activeSchoolFilters.length !== 0){
                previouslyFilteredSpells = filteredSpellsArray.length > 0 ? filteredSpellsArray : allSpells;
                filteredSpellsArray = [];

                previouslyFilteredSpells.forEach((spell) => {
                    let include = false;

                    activeSchoolFilters.forEach(filter => {
                        if (spell.spellSchool === filter) {
                            include = true;
                            return;
                        };
                    });

                    if(include){
                        filteredSpellsArray.push(spell);
                    }
                });
            }

            if(activeLevelFilters.length !== 0){
                previouslyFilteredSpells = filteredSpellsArray.length > 0 ? filteredSpellsArray : allSpells;
                filteredSpellsArray = [];

                previouslyFilteredSpells.forEach((spell) => {
                    let include = false;

                    activeLevelFilters.forEach(filter => {
                        if (spell.spellLevel === filter) {
                            include = true;
                            return;
                        };
                    });

                    if(include){
                        filteredSpellsArray.push(spell);
                    }
                });
            }

            if(activeEffectFilters.length !== 0){
                previouslyFilteredSpells = filteredSpellsArray.length > 0 ? filteredSpellsArray : allSpells;
                filteredSpellsArray = [];
                
                previouslyFilteredSpells.forEach((spell) => {
                    let include = false;

                    activeEffectFilters.forEach(filter => {
                        if (spell.damageOrEffect === filter) {
                            include = true;
                            return;
                        };
                    });

                    if(include){
                        filteredSpellsArray.push(spell);
                    }
                });
            }


            return Array.from(new Set(filteredSpellsArray));
        }
    }

    return (
        <div className="Container">
            <div className="Header">
                <img src={Logo} width="250" alt="Logo"/>
                <h1 className="Spellbook-Header">Spellbook</h1>
            </div>

            <SearchBox
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />

            <FiltersList
                searchTerm={searchTerm}
                filterSpells={filterSpells}
                spellsToDisplay={spellsToDisplay}
                setSpellsToDisplay={setSpellsToDisplay}
                activeSchoolFilters = {activeSchoolFilters}
                setActiveSchoolFilters = {setActiveSchoolFilters}
                activeLevelFilters = {activeLevelFilters}
                setActiveLevelFilters = {setActiveLevelFilters}
                activeEffectFilters = {activeEffectFilters}
                setActiveEffectFilters = {setActiveEffectFilters}
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
