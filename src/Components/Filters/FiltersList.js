import React from 'react'
import Filter from './Filter.js'
import AllFiltersList from './AllFiltersList.js'

export default function FiltersList({spells, setSpellsToDisplay}) {
    let activeFilters = [];

    const handleFilterClick = (event, filter) => {
        if(event.target.checked){
            activeFilters.push(filter.displayName);
        } else {
            activeFilters = activeFilters.filter(activeFilter => activeFilter !== filter.displayName);
        }
        console.log(activeFilters)

        if(activeFilters.length === 0){
            setSpellsToDisplay(spells);
        } else {
            let filteredSpells = filterSpells(activeFilters);
            console.log(filteredSpells);
            //setSpellsToDisplay(filteredSpells);
        }
    }

    const filterSpells = function(filters) {
        let filteredSpells = [];
        spells.forEach((spell) => {
            let include = false;

            filters.forEach(filter => {
                Object.values(spell).forEach(value => {
                    if (value === filter) {
                        include = true;
                        return;
                    }
                });
            });

            if(include){
                filteredSpells.push(spell);
            }
        });

        return filteredSpells;
    }

    return (
        <div className='Spellbook-FiltersList'>
            <h1>Filter By: </h1>
            {AllFiltersList.map(filter => (
                <Filter 
                    filter={filter}
                    key={filter.displayName}
                    filterFunction={handleFilterClick}
                />
            ))}
        </div>
    )
}
