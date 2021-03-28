import React, {useState, useEffect} from 'react';
import Logo from '../../images/DnDLogo.jpg'
import './App.css';
import FiltersList from '../Filters/FiltersList.js';
import Spell from '../Spell/Spell.js';
import allSpells from '../SpellLists/AllSpells.js';
import SearchBox from '../Searchbox/Searchbox.js';


function App() {
    //Setup variables that use state
    const [searchTerm, setSearchTerm] = useState('');
    const [spellsToDisplay, setSpellsToDisplay] = useState(allSpells);
    const [activeSchoolFilters, setActiveSchoolFilters] = useState([]);
    const [activeLevelFilters, setActiveLevelFilters] = useState([]);
    const [activeEffectFilters, setActiveEffectFilters] = useState([]);

    /*
    This useEffect gets called anytime anything in it's dependency array is changed. The dependency array is the array at the end of the useEffect call. This updates the state of 
    spellsToDisplay to the results of the filterSpells function. Since the 'handleFilterClick'
    function(in FiltersList.js) updates the appropriate filters array for the filter that was clicked, and all of the filter arrays are dependencies of useEffect, anytime a filter is checked or unchecked useEffect will run to update which spells get displayed on the frontend. 
    */
    useEffect(() => {
        setSpellsToDisplay(filterSpells(searchTerm, activeSchoolFilters, activeLevelFilters, activeEffectFilters));
    }, [searchTerm, activeSchoolFilters, activeLevelFilters, activeEffectFilters]);

    /*
    This is the function that actually looks at the active(checked) filters and filters the
    spells that get displayed on the front end. It starts with the search term set in the 
    search box, then passes any spells that match the search term to the next filter as an
    array. Each filter after that takes an array of spells that met the previous filter and
    checks to see if they match the current filter. The filteredSpellsArray is cleared inside
    each filter after saving its previous data to the 'previouslyFilteredSpells' array. The
    filter then checks each spell in the 'previouslyFilteredSpells' array to see if it passes
    the current filter. If it does it is re-added to the 'filteredSpellsArray' and passed to
    the next filter. This prevents new filters from overwriting past filters and displaying
    spells that don't match all active filters. SearchTerm is checked first as it is the most restrictive filter so later forEach loops won't have to loop over as many spells if both
    a search term and one or more filters are active at the same time. If the search term box
    is empty, or a filter is not applied, a forEach loop is not entered for that filter.

    If there are no active filters and no search term then allSpells is returned so that all
    spells are displayed. This check is performed first to remove unnecessary loops. 
    */
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


            return filteredSpellsArray;
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
