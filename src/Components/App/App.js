import React, { useState } from 'react';
import Logo from '../../images/DnDLogo.jpg'
import './App.css';
import Filters from '../Filters/Filters.js';
import Spell from '../Spell/Spell.js';
import allSpells from '../SpellLists/AllSpells.js';
import Searchbox from '../Searchbox/Searchbox.js';


function App () {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filtered, setFiltered] = useState(false);
  const [filteredSpells, setFilteredSpells] = useState(allSpells);
  const handleSearch = e => {
    setSearchTerm(e.target.value);
    e.target.value !== '' ? setFiltered(true) : setFiltered(false)
    filtered === false ? setFilteredSpells(allSpells) : 
      setFilteredSpells(allSpells.filter(spell => spell.spellName.toLowerCase().includes(searchTerm.toLowerCase())))
    console.log(filteredSpells)
    console.log(searchTerm)
    console.log(filtered)
  }

    return (
      <div className="Container">
        <div className="Header">
          <img src={Logo} width="250" alt="Logo"/>
          <h1 className="Spellbook-Header">Spellbook</h1>
        </div>
        <Searchbox handleSearch={handleSearch} />
        <Filters />
        <div className="Spellbook"> 
          {filteredSpells.length < 1 ? <h2>No Spells Found</h2> :
          filteredSpells.map(spell => (
              <Spell key={spell.id} spell={spell}/>                      
          ))}
        </div>    
      </div>
    );
}

export default App;
