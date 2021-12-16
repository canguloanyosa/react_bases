// Template String

const name = 'Cristian';
const lastname = 'Angulo';

const fullName = `${name} ${lastname}`;

const getWelcome = (fullName) => {
    return `Hi ${fullName}`;
};

console.log(`${getWelcome(fullName)}`);
