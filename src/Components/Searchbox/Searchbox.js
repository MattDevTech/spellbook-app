import React from 'react'

export default function Searchbox(props) {
    return (
        <div>
            <input onChange={props.handleSearch} type="text" id="spellSearch" name="spellSearch"></input>
            <label htmlFor="spellSearch">Search Spells:</label>
        </div>
    )
}
