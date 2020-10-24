import React from 'react'
import Filter from './Filter.js'
import AllFiltersList from './AllFiltersList.js'

export default function FiltersList({setSpellsToDisplay, spellsToDisplay}) {
    return (
        <div className='Spellbook-FiltersList'>
            <h1>Filter By: </h1>
            {AllFiltersList.map(filter => (
                <Filter 
                    filter={filter} 
                    key={filter.filterName} 
                    setSpellsToDisplay={setSpellsToDisplay}
                    spellsToDisplay={spellsToDisplay}
                />
            ))}
        </div>
    )
}
