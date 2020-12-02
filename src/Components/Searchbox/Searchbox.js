import React from 'react'

export default function Searchbox({setSearchTerm}) {
    const handleSearch = e => {
        setSearchTerm(e.target.value);
    }

    return (
        <div>
             <label htmlFor="spellSearch">Search Spells:</label>
            <input onChange={handleSearch} type="text" id="spellSearch" name="spellSearch" />
        </div>
    )
}
