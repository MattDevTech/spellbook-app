import React from 'react'

export default function Searchbox({setSearchTerm, searchTerm}) {

    const updateSearchTerm = e => {
        setSearchTerm(e.target.value);
    }

    return (
        <div>
             <label htmlFor="spellSearch">Search Spells:</label>
            <input onChange={updateSearchTerm} type="text" id="spellSearch" name="spellSearch" />
        </div>
    )
}
