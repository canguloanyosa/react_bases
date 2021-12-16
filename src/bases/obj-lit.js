// Object Literal

const person = {
    name : 'Cristian',
    lastname : 'Angulo',
    age : 45,
    address : {
        street : 'Av. Rimac 347',
        city : 'Lima'
    }
};

const person2 = {...person};
person2.name = 'Paul';

console.log(person);
console.log(person2);