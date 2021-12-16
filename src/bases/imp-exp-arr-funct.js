// Import, Export and arrays functions

import { heroes } from '../data/heroes';

export const getHeroeById = (id) => {
    return heroes.find((element) => {
        return (element.id === id);
    });
};

// console.log(getHeroeById(3));

export const getHeroesByOwner = (owner) => {
    return heroes.filter((element) => {
        return (element.owner === owner);
    });
};

// console.log(getHeroesByOwner('DC'));
