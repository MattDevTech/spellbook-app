import React from 'react'

export default function Searchbox({setSearchTerm}) {

    /*Update the searchTerm value to match the value in the searchbox. Once the searchTerm value is updated the useEffect in App.js is called and updates the spells displayed
    */
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
