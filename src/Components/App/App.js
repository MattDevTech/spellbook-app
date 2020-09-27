import React, { useState } from 'react';
import Logo from '../../images/DnDLogo.jpg'
import './App.css';
import Filters from '../Filters/Filters.js';
import Spell from '../Spell/Spell.js';
import allSpells from '../SpellLists/AllSpells.js';
// import cantrips from '../SpellLists/CantripsList.js';
// import level1Spells from '../SpellLists/Level1List.js';
// import SpellsByLevel from '../SpellsByLevel/SpellsByLevel.js';

// const applyFilters = (spells, activeFilters) => {
//   filteredSpells = [];
//   spells.forEach(spell => {
//     activeFilters.forEach(filter => {
      
//     })
//   });

//   return filteredSpells;
// }


function App() {
  // this.state = {
  //   activeFilters = []
  // }

  const fullSpellList = allSpells;

  return (
    <div className="Container">
      <div className="Header">
        <img src={Logo} width="250" alt="Logo"/>
        <h1 className="Spellbook-Header">Spellbook</h1>
      </div>
      <div className="Spellbook">
        <Filters />  
        {fullSpellList.map(spellLevel => (
          spellLevel.map(spell => (
            <Spell spell={spell}/>
          ))                        
        ))}
      </div>    
    </div>
  );
}

export default App;
