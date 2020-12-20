import React from 'react'

export default function Filter({filter, filterFunction}) {
    return (
        <div>
            <label>
                <input
                    type='checkbox'
                    value={filter.filterName}
                    name={filter.displayName}
                    key={filter.filterName}
                    onChange={(e) => filterFunction(e, filter)}
                />
                <span>{filter.displayName}</span>
            </label>
        </div>
    )
}
