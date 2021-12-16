// Promise

import { getHeroeById } from './bases/imp-exp-arr-funct';

const getHeroeByIdAsync = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if(heroe) {
                resolve(heroe);
            } else {
                reject ('Heroe not fund');
            }            
        }, 2000);
    });
};

getHeroeByIdAsync(54)
    .then((heroe) => {
    console.log(heroe);
}).catch(err => console.warn(err));