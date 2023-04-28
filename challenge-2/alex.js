// alex.js

const  firstname1 = "Alex"
const  surname1 = "Naidoo"
const role1 = "Head of Marketing"

export const role = () => console.log(role1)
const display= firstname1 + " " + surname1 + " (" + role1+ ")"
document.querySelector('#alex').innerText = display