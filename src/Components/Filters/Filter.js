import React, { useState } from 'react'

export default function Filter({filter}) {
    const [isChecked, setIsChecked] = useState(false)
    const handleFilterClick = e => {
        console.log(e.target)
        setIsChecked(!isChecked)
        console.log('Filter Checked')
    }
    return (
        <div>
            <input 
            type='checkbox'
            id={filter.filterName} 
            value={filter.filterName} 
            name={filter.displayName} 
            key={filter.filterName}
            data-ischecked={isChecked}
            onChange={handleFilterClick}/>
            <label htmlFor={filter.filterName}> {filter.displayName}</label>
        </div>
    )
}
