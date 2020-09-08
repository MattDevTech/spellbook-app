import React from "react";
import "./SpellsByLevel.css";
import Spell from "../Spell/Spell"

const SpellsByLevel = (props) => {
    return (
        <div className='SpellsByLevel'>
            <h2 className='SpellsByLevel-Header'>{props.spellLevel}</h2>
            {props.spellList &&
                props.spellList.map(s => (
                        <Spell spell={s}/>
                ))
            }            
        </div>
    )
}

export default SpellsByLevel ;