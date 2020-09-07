import React from "react";
import "./Spell.css";

const Spell = (props) => {

    return(

        <div className='SpellsByLevel-Spell' id={props.spell.spellName}>
        <span><h3>{props.spell.spellName} <img className='SpellsByLevel-Image' src={props.spell.image} width="100px" alt={props.spell.spellName} /></h3></span>
        <ul>
            <li>Spell School: {props.spell.spellSchool}</li>
            <li>Casting Time: {props.spell.castingTime}</li>
            <li>Range: {props.spell.range}</li>
            <li>Attack Type or Save: {props.spell.attackOrSave}</li>
        </ul>
        <button onClick={console.log(props)}>Hide Spell</button>                    
        </div>
            
    )
}

export default Spell ;
