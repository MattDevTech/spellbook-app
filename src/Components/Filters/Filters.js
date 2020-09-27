import React from 'react'

const spellSchools = ['Abjuration', 'Conjuration', 'Evocation'];
const otherFilters = [
    {name: 'Damage',
    value: false},
    {name: 'Effect',
    value: 'false'}
];

export default function Filters() {
    return (
        <div className='Spellbook-Filters'>
            <h1>Filter By: </h1>
            {spellSchools.map(s => (
                <>
                    <input type='checkbox' id={s} value={s} name={s} />
                    <label for={s}> {s}</label>
                </>
            ))}
            <br></br>
            <br></br>
            {otherFilters.map(f => (
                <>
                    <input type='checkbox' id={f.name} value={f.value} name={f.name} />
                    <label for={f.name}> {f.name}</label>
                </>
            ))}
        </div>
    )
}
