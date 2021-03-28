import React from 'react'

const filterSpells = function(filters) {
    if(filters && filters.length === 0 && searchTerm === ''){
        return allSpells
    }

    else if(filters && filters.length > 0) {

        let filteredSpellsArray = [];

        if(searchTerm && searchTerm.length > 0){
            allSpells.forEach((spell) => {
                let include = false;

                filters.forEach(filter => {
                    Object.values(spell).forEach(value => {
                        if (value === filter) {
                            include = true;
                            return;
                        }
                    });
                });

                if(include){
                    filteredSpellsArray.push(spell);
                }
            });
    
            return filteredSpellsArray;
        }
        else {

            allSpells.forEach((spell) => {
            let include = false;

            filters.forEach(filter => {
                Object.values(spell).forEach(value => {
                    if (value === filter) {
                        include = true;
                        return;
                    }
                });
            });

            if(include){
                filteredSpellsArray.push(spell);
            }
            });
    
            return filteredSpellsArray;
        }
    }
    else {
        return allSpells;
    }
}