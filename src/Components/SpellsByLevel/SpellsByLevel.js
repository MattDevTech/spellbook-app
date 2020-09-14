import React, { useState } from "react";
import "./SpellsByLevel.css";
import Spell from "../Spell/Spell"

const SpellsByLevel = (props) => {
    const [visible, setVisible] = useState(true);

    return (
        <div className='SpellsByLevel'>
            <h2 className='SpellsByLevel-Header'>{props.spellLevel}</h2>
            {visible === true ? 
            <button onClick={() => setVisible(!visible)}>Hide All {props.spellLevel}</button> :
            <button onClick={() => setVisible(!visible)}>Show All {props.spellLevel}</button>
            }
            
            {visible === true ?
            props.spellList &&
                props.spellList.map(s => (
                        <Spell spell={s}/>
                )) : null}
        </div>
    )
}

export default SpellsByLevel ;