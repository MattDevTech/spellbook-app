import React from "react";
import "./SpellsByLevel.css";

const SpellsByLevel = (props) => {
    return (
        <div className='SpellsByLevel'>
            <h2 className='SpellsByLevel-Header'>{props.spellLevel}</h2>
            {props.spellList &&
                props.spellList.map(s => (
                    <div className='SpellsByLevel-Spell' id={s.spellName}>
                        <span><h3>{s.spellName} <img className='SpellsByLevel-Image' src={s.image} width="100px" alt="" /></h3></span>                
                        <ul>
                            <li>Spell School: {s.spellSchool}</li>
                            <li>Casting Time: {s.castingTime}</li>
                            <li>Range: {s.range}</li>
                            <li>Attack Type or Save: {s.attackOrSave}</li>
                        </ul>
                        <button onClick={console.log('Spell Button Clicked')}>Hide Spell</button>                    
                    </div>
                ))
            }            
        </div>
    )
}

export default SpellsByLevel ;