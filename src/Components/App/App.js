import React, { useState, useEffect } from 'react';
import Logo from '../../images/DnDLogo.jpg'
import './App.css';
import FiltersList from '../Filters/FiltersList.js';
import Spell from '../Spell/Spell.js';
import allSpells from '../SpellLists/AllSpells.js';
import Searchbox from '../Searchbox/Searchbox.js';


function App () {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filtersApplied, setFiltersApplied] = useState(false);
  const [filteredSpells, setFilteredSpells] = useState([]);
  const [spellsToDisplay, setSpellsToDisplay] = useState(allSpells);
  const handleSearch = e => {
    setSearchTerm(e.target.value);
  }
  const remove = (spell) => {
    setSpellsToDisplay(spellsToDisplay.filter(s => s.spellName !== spell.spellName))
  }

  useEffect(() => {
    searchTerm === '' && filtersApplied === false ? setSpellsToDisplay(allSpells) :
    setSpellsToDisplay(allSpells.filter(spell => spell.spellName.toLowerCase().includes(searchTerm.toLowerCase())))
  }, [searchTerm])
  

    return (
      <div className="Container">
        <div className="Header">
          <img src={Logo} width="250" alt="Logo"/>
          <h1 className="Spellbook-Header">Spellbook</h1>
        </div>
        <Searchbox handleSearch={handleSearch} />
        <FiltersList />
        <div className="Spellbook"> 
          {spellsToDisplay.length < 1 ? <h2>No Spells Found</h2> :
          spellsToDisplay.map(spell => (
              <Spell 
                key={spell.spellName} 
                spell={spell} 
                remove={remove}
              />                      
          ))}
        </div>    
      </div>
    );
}

export default App;
