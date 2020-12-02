import React, {useState, useEffect} from 'react';
import Logo from '../../images/DnDLogo.jpg'
import './App.css';
import FiltersList from '../Filters/FiltersList.js';
import Spell from '../Spell/Spell.js';
import allSpells from '../SpellLists/AllSpells.js';
import SearchBox from '../Searchbox/Searchbox.js';


function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredSpells, setFilteredSpells] = useState(allSpells);
    const [spellsToDisplay, setSpellsToDisplay] = useState(allSpells);

    useEffect(() => {
        if (searchTerm !== '') {
            setSpellsToDisplay(filteredSpells.filter(spell => spell.spellName.toLowerCase().includes(searchTerm.toLowerCase())))
        } else {
            setSpellsToDisplay(filteredSpells);
        }
    }, [searchTerm, filteredSpells]);

    const remove = (spell) => {
        setSpellsToDisplay(spellsToDisplay.filter(s => s.spellName !== spell.spellName))
    }

    return (
        <div className="Container">
            <div className="Header">
                <img src={Logo} width="250" alt="Logo"/>
                <h1 className="Spellbook-Header">Spellbook</h1>
            </div>

            <SearchBox
                spells={filteredSpells}
                setFilteredSpells={setFilteredSpells}
                setSpellsToDisplay={setSpellsToDisplay}
                setSearchTerm={setSearchTerm}
            />

            <FiltersList
                spells={filteredSpells}
                setFilteredSpells={setFilteredSpells}
                setSpellsToDisplay={setSpellsToDisplay}
            />

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
