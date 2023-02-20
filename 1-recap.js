// 1. var let const
// break up with var
const numbers = [12, 546, 45, 98];
// const not reassignable ==> it's not possible to reassign const variable.
let salary = 450;
salary = 455;
// it's possible to reassign let variable, but not redeclare.
//  let & const ==> Block Scope

// 2. Default parameter
function calculateSalary(salary, tax = 0.25, bonus = 0) {
    const remainig = salary - salary * tax;
    const total = remainig + bonus;
    return total;
}

// 3. template String
const elementHTML = `
<div>
    <h3>Name: </h3>
    <p>Address: </p>
    <p>Salary: </p>
    <p>Others: ${total}</p>
</div>
`;

// 4. Arrow function
const doubleIt = x => x * 2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;

// 5. Spread
const ages = [11, 13, 15, 14, 10, 16];
const newAge = [...ages, 22, 24, 23];

// 6. destructuring
const { x, y, z, ...c } = { x: 45, y: 12, z: 33, name: 'Sakib Al Hasan', salary: 450000 };
const[a, b, ...r] = [12, 45, 21, 65, 98];