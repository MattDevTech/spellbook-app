import React, { useState, useEffect } from 'react'
import allSpells from '../SpellLists/AllSpells'

export default function Filter({filter, setSpellsToDisplay, spellsToDisplay}) {
    const [isChecked, setIsChecked] = useState(false)
    const handleFilterClick = e => {
        setIsChecked(!isChecked)
    }
    useEffect(() => {
        isChecked === true ? setSpellsToDisplay(spellsToDisplay.filter(spell => Object.values(spell).includes(filter.displayName))) :
        setSpellsToDisplay(allSpells)
      }, [isChecked])

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
