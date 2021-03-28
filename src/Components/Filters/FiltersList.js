import React, {useEffect, useState} from 'react'
import Filter from './Filter.js'
import AllFiltersList from './AllFiltersList.js'
import allSpells from "../SpellLists/AllSpells";

export default function FiltersList({searchTerm, activeSchoolFilters, setActiveSchoolFilters, activeLevelFilters, setActiveLevelFilters, activeEffectFilters, setActiveEffectFilters, filterSpells, setSpellsToDisplay}) {
    

    useEffect(() => {
        setSpellsToDisplay(filterSpells(searchTerm, activeSchoolFilters, activeLevelFilters, activeEffectFilters));
    }, [searchTerm, activeSchoolFilters, activeLevelFilters, activeEffectFilters]);

    const handleFilterClick = (event, filter) => {
        if(event.target.checked){
            if(filter.filterType === 'School'){
                setActiveSchoolFilters(activeSchoolFilters => [...activeSchoolFilters, filter.displayName]);
            }
            else if(filter.filterType === 'Spell Level'){
                setActiveLevelFilters(activeLevelFilters => [...activeLevelFilters, filter.displayName]);
            }
            else if(filter.filterType === 'Effect'){
                setActiveEffectFilters(activeEffectFilters => [...activeEffectFilters, filter.displayName]);
            }
        } else {
            if(filter.filterType === 'School'){
                setActiveSchoolFilters(activeSchoolFilters.filter(activeSchoolFilter => activeSchoolFilter !== filter.displayName));
            }
            else if(filter.filterType === 'Spell Level'){
                setActiveLevelFilters(activeLevelFilters.filter(activeLevelFilter => activeLevelFilter !== filter.displayName));
            }
            else if(filter.filterType === 'Effect'){
                setActiveEffectFilters(activeEffectFilters.filter(activeEffectFilter => activeEffectFilter !== filter.displayName));
            }
        }
    }

    return (
        <div className='Spellbook-FiltersList'>
            <h1>Filter By: </h1>
            {AllFiltersList.map(filter => (
                <Filter 
                    filter={filter}
                    key={filter.displayName}
                    filterFunction={handleFilterClick}
                />
            ))}
        </div>
    )
}
