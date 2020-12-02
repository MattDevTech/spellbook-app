import React, {useEffect, useState} from 'react'
import Filter from './Filter.js'
import AllFiltersList from './AllFiltersList.js'
import allSpells from "../SpellLists/AllSpells";

export default function FiltersList({spells, setFilteredSpells}) {
    const [activeFilters, setActiveFilters] = useState([]);

    useEffect(() => {
        if(activeFilters.length === 0){
            setFilteredSpells(spells);
        } else {
            let filteredSpells = filterSpells(activeFilters);
            setFilteredSpells(filteredSpells)
        }
    }, [activeFilters]);

    const handleFilterClick = (event, filter) => {
        if(event.target.checked){
            setActiveFilters(activeFilters => [...activeFilters, filter.displayName]);
        } else {
            setActiveFilters(activeFilters.filter(activeFilter => activeFilter !== filter.displayName));
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
