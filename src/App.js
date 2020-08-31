import React from 'react';
import cantrips from './CantripsList.js';
import level1Spells from './Level1List.js';
import SpellsByLevel from './SpellsByLevel.js';
import Logo from './images/DnDLogo.jpg'
import './App.css';

function App() {
  return (
    <div className="Container">
      <div className="Header">
        <img src={Logo} width="250" alt="Logo"/>
        <h1 className="Spellbook-Header">Spellbook</h1>
      </div>
      <div className="Spellbook">
        
        <SpellsByLevel spellLevel="Cantrips" spellList={cantrips} />      
        <SpellsByLevel spellLevel="Level 1 Spells" spellList={level1Spells}/>
        <SpellsByLevel spellLevel="Level 2 Spells" spellList={level1Spells}/>
        
      </div>    
    </div>
  );
}

export default App;
