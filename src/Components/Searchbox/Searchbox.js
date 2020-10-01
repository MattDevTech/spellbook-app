import React from 'react'

export default function Searchbox({handleSearch}) {
    return (
        <div>
             <label htmlFor="spellSearch">Search Spells:</label>
            <input onChange={handleSearch} type="text" id="spellSearch" name="spellSearch"></input>
        </div>
    )
}
