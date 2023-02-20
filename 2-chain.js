const users = [
    { id: 1, name: 'Abul', peofession: 'doctor' }
];

// console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        { id: 1, name: 'Babul', job: 'leader' },
        { id: 2, name: 'Dabul', job: 'leader' }
    ]
};
const firstJob = data.data[0].job;
// console.log(firstJob);

const user = {
    id: 5001,
    name: 'Thomas Alba Edison',
    address: {
        street: {
            first: '35/A kochukhet lane',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'cantonment',
        city: 'Dhaka'
    }
};
// const userFloor = user.address.stret?.second;
// optional chaining (?) ==> use (?) marks before (.) to find error place
const userFloor = user.address.street.second;
console.log(userFloor);