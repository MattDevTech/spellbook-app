import React from 'react'

export default function Searchbox({spellsToDisplay, setSearchTerm, setSpellsToDisplay, activeFilters, filterSpells}) {

    const handleSearch = e => {
        if(e.target.value.length === 0){
            setSpellsToDisplay(filterSpells(activeFilters))
        }
        else{
            setSpellsToDisplay(filterSpells(activeFilters).filter(spell => spell.spellName.toLowerCase().includes(e.target.value.toLowerCase())));
        }
        setSearchTerm(e.target.value);
    }

    return (
        <div>
             <label htmlFor="spellSearch">Search Spells:</label>
            <input onChange={handleSearch} type="text" id="spellSearch" name="spellSearch" />
        </div>
    )
}
