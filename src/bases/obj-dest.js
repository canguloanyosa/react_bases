// Object destructuring

const person = {
    name : 'Cristian',
    lastName : 'Angulo',
    age : 32
};

//const {name, lastName, age} = person;

// console.log(name);
// console.log(lastName);
// console.log(age);

const userContext = ({name,lastName,age,weight=70}) => {
    console.log(name, lastName, age, weight);
    return {
        fullName : `${name} ${lastName}`,
        newAge : age,
        address : {
            street: 'Av. Rimac 347',
            city: 'Lima'
        }
    };
};

const {fullName, newAge,address : {street, city}} = userContext(person);
console.log(fullName, newAge, street, city);