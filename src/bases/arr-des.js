// Array destructuring

const friends = ['Diego', 'Erick', 'Manuel'];

const [,f1] = friends;

console.log(f1);

const returnArray = () => {
    return ['ABC', 123];
};

const [letters, numbers] = returnArray();
console.log(letters, numbers);

const arr1 = (value) => {
    return [value, () => {
        console.log('Hi');
    }]
};

const [ name, setName] = arr1('Cristian');
console.log(name);
setName();
