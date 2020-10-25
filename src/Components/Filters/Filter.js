import React, { useState, useEffect } from 'react'
import allSpells from '../SpellLists/AllSpells'

export default function Filter({filter, filtersApplied, setFiltersApplied, filteredSpells, setFilteredSpells, allSpells}) {
    const [filterToRemove, setFilterToRemove] = useState('')
    const [isChecked, setIsChecked] = useState(false)
    const handleFilterClick = e => {
        setIsChecked(!isChecked)
        if(isChecked === false){
            setFiltersApplied(Array.from(new Set([...filtersApplied, filter].flat())))
        }
        else{
            setFilterToRemove(filter.displayName);
            setFiltersApplied(filtersApplied.filter(f => f !== filter))
        }
        
    }
    useEffect(() => {
        console.log(filtersApplied);
        if(filtersApplied.length === 0) {
            setFilteredSpells([])
        }
        else if(isChecked === true) {
            let spells = Array.from(new Set([...filteredSpells, allSpells.filter(spell => Object.values(spell).includes(filter.displayName))].flat()));
            setFilteredSpells(spells);
        } 
        else if(isChecked === false && filtersApplied.length > 0 && filterToRemove === filter.displayName) {
            let spellList = filteredSpells.filter(spell => Object.values(spell).includes(filter.displayName) === false);
            setFilteredSpells(spellList);
            setFilterToRemove('');
        }
      }, [isChecked, filtersApplied, filterToRemove])

    return (
        <div>
            <input 
            type='checkbox'
            id={filter.filterName} 
            value={filter.filterName} 
            name={filter.displayName} 
            key={filter.filterName}
            data-ischecked={isChecked}
            onChange={handleFilterClick}/>
            <label htmlFor={filter.filterName}> {filter.displayName}</label>
        </div>
    )
}
