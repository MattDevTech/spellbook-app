import React, {useEffect, useState} from 'react'
import Filter from './Filter.js'
import AllFiltersList from './AllFiltersList.js'
import allSpells from "../SpellLists/AllSpells";

export default function FiltersList({spells, activeFilters, setActiveFilters, filterSpells, setSpellsToDisplay}) {
    

    useEffect(() => {
        if(activeFilters.length === 0){
            setSpellsToDisplay(spells);
        } else {
            setSpellsToDisplay(filterSpells(activeFilters))
        }
    }, [activeFilters]);

    const handleFilterClick = (event, filter) => {
        if(event.target.checked){
            setActiveFilters(activeFilters => [...activeFilters, filter.displayName]);
        } else {
            setActiveFilters(activeFilters.filter(activeFilter => activeFilter !== filter.displayName));
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
