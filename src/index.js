// Promise

import {getHeroeById} from './bases/imp-exp-arr-funct';

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroeById(2);
        console.log(heroe);
    }, 2000);    
});