import React, { useState } from "react";

import "./Spell.css";

const Spell = (spell) => {
    const [visible, setVisible] = useState(true);

    return(

        <div className='Spellbook-Spell' id={spell.spell.spellName}>
        <span><h3>{spell.spell.spellName} <img className='SpellsByLevel-Image' src={spell.spell.image} width="100px" alt={spell.spell.spellName} /></h3></span>
        {visible === true ? 
            <ul>
                <li>Spell School: {spell.spell.spellSchool}</li>
                <li>Casting Time: {spell.spell.castingTime}</li>
                <li>Range: {spell.spell.range}</li>
                <li>Attack Type or Save: {spell.spell.attackOrSave}</li>
                <button onClick={() => setVisible(!visible)}>Hide {spell.spell.spellName} Details</button>
            </ul>             
            : 
            <button onClick={() => setVisible(!visible)}>Show {spell.spell.spellName} Details</button>
        }
        <hr></hr>
                            
        </div>
            
    )
}

export default Spell ;
