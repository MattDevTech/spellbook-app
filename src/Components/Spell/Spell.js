import React, { useState } from "react";

import "./Spell.css";

const Spell = ({spell, spellsToDisplay, setSpellsToDisplay}) => {
    const [visible, setVisible] = useState(true);
    const remove = (e) => {
        setSpellsToDisplay(spellsToDisplay.filter(s => s.spellName !== e.currentTarget.parentElement.id))
    }

    return(

        <div className='Spellbook-Spell' id={spell.spellName}>
            <span><h3>{spell.spellName} <img className='SpellsByLevel-Image' src={spell.image} width="100px" alt={spell.spellName} /></h3></span>
            {visible === true ? 
                <ul>
                    <li>Spell School: {spell.spellSchool}</li>
                    <li>Spell Level: {spell.spellLevel}</li>
                    <li>Casting Time: {spell.castingTime}</li>
                    <li>Range: {spell.range}</li>
                    <li>Attack Type or Save: {spell.attackOrSave}</li>
                    <button onClick={() => setVisible(!visible)}>Hide {spell.spellName} Details</button>
                </ul>             
                : 
                <button onClick={() => setVisible(!visible)}>Show {spell.spellName} Details</button>
            }
            <button onClick={remove}>Remove {spell.spellName}</button>
            <hr></hr>
                            
        </div>
            
    )
}

export default Spell ;
