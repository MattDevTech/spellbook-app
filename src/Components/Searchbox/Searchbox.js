import React from 'react'

export default function Searchbox({spells, setFilteredSpells, setSearchTerm, setSpellsToDisplay}) {
    const handleSearch = e => {
        setSpellsToDisplay(spells.filter(spell => spell.spellName.toLowerCase().includes(e.target.value.toLowerCase())));
        setSearchTerm(e.target.value);
    }

    return (
        <div>
             <label htmlFor="spellSearch">Search Spells:</label>
            <input onChange={handleSearch} type="text" id="spellSearch" name="spellSearch" />
        </div>
    )
}
