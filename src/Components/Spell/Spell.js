import React from "react";
import "./Spell.css";

const print = x => {
    console.log(x);
}

const Spell = (props) => {

    return(

        <div className='SpellsByLevel-Spell' id={props.spellObject.spellName}>
        <span><h3>{props.spellObject.spellName} <img className='SpellsByLevel-Image' src={props.spellObject.image} width="100px" alt={props.spellObject.spellName} /></h3></span>
        <ul>
            <li>Spell School: {props.spellObject.spellSchool}</li>
            <li>Casting Time: {props.spellObject.castingTime}</li>
            <li>Range: {props.spellObject.range}</li>
            <li>Attack Type or Save: {props.spellObject.attackOrSave}</li>
        </ul>

        <button onClick={() => {print(props)}}>Hide Spell</button>                   
        </div>
            
    )
}

export default Spell ;
