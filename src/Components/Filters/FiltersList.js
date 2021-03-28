import React from 'react'
import Filter from './Filter.js';
import AllFiltersList from './AllFiltersList.js';

export default function FiltersList({activeSchoolFilters, setActiveSchoolFilters, activeLevelFilters, setActiveLevelFilters, activeEffectFilters, setActiveEffectFilters}) {

    /*
    This function handles anytime a filter is checked or unchecked. If a filter is checked then it is added to or removed from the appropriate filter array via the appropriate set***Filter function. The separate filter array types are used to allow the user to select multiple filters of the same type(if they're searching for spells from multiple schools, spell levels, etc). Once any filter array is updated the useEffect in App.js is run which changes which spells are displayed on the frontend.
    */
    const handleFilterClick = (event, filter) => {
        /*If a filter is checked then add it to the correct filters array. The spread(...) operator is used to keep any values that already existed in the filter arrays so they are not overwritten when the new filter is added. 
        */
        if(event.target.checked){
            if(filter.filterType === 'School'){
                setActiveSchoolFilters(activeSchoolFilters => [...activeSchoolFilters, filter.displayName]);
            }
            else if(filter.filterType === 'Spell Level'){
                setActiveLevelFilters(activeLevelFilters => [...activeLevelFilters, filter.displayName]);
            }
            else if(filter.filterType === 'Effect'){
                setActiveEffectFilters(activeEffectFilters => [...activeEffectFilters, filter.displayName]);
            }

        //If a filter is unchecked then remove it from the appropriate filters array
        } else {
            if(filter.filterType === 'School'){
                setActiveSchoolFilters(activeSchoolFilters.filter(activeSchoolFilter => activeSchoolFilter !== filter.displayName));
            }
            else if(filter.filterType === 'Spell Level'){
                setActiveLevelFilters(activeLevelFilters.filter(activeLevelFilter => activeLevelFilter !== filter.displayName));
            }
            else if(filter.filterType === 'Effect'){
                setActiveEffectFilters(activeEffectFilters.filter(activeEffectFilter => activeEffectFilter !== filter.displayName));
            }
        }
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
