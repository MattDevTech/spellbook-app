import React, { useState } from "react";

import "./Spell.css";

const Spell = ({spell, remove}) => {
    const [visible, setVisible] = useState(true);
    const handleRemove = () => {
        remove(spell)
    }

    return(

        <div className='Spellbook-Spell' id={spell.spellName}>
            <span><h3>{spell.spellName} <img className='SpellsByLevel-Image' src={spell.image} width="100px" alt={spell.spellName} /></h3></span>
            {visible === true ? 
                <ul>
                    <li>Spell School: {spell.spellSchool}</li>
                    <li>Casting Time: {spell.castingTime}</li>
                    <li>Range: {spell.range}</li>
                    <li>Attack Type or Save: {spell.attackOrSave}</li>
                    <button onClick={() => setVisible(!visible)}>Hide {spell.spellName} Details</button>
                </ul>             
                : 
                <button onClick={() => setVisible(!visible)}>Show {spell.spellName} Details</button>
            }
            <button onClick={handleRemove}>Remove {spell.spellName}</button>
            <hr></hr>
                            
        </div>
            
    )
}

export default Spell ;
