// var firstName = prompt('What is your first name?').trim();
// var lastName = prompt('What is your last name?').trim();
// var email = prompt ('Your email?').replaceAll(' ', '').toLowerCase();
// if (email.indexOf('@') === -1){
//     email = `not valid email <b>${email}</b> (symbol @ not exist)`;    
// } else if(email.indexOf('@') === 0) {
//     email = `not valid email <b>${email}</b> (symbol @ find in first place)`;
// } else if(email.indexOf('@') === email.length - 1) {
//     email = `not valid email <b>${email}</b> (symbol @ find in last place)`;
// } else {
//     email = `<b>${email}</b>`
// }
// var yearOfBirth = prompt('What is your year of birth?');
// var currentYear = new Date().getFullYear();
// var age = currentYear - yearOfBirth;
// document.write(`
//     <ul>
//         <li>First name: <b>${firstName}</b></li>
//         <li>Last name: <b>${lastName}</b></li>
//         <li>Email: ${email}</li>
//         <li>Age: <b>${age}</b></li>
//     </ul>
// `)

firstName = prompt('What is your first name?').trim();
lastName = prompt('What is your last name?').trim();
email = prompt('Your email?').replaceAll(' ','').toLowerCase();
if (email.indexOf('@') === -1){
    email = `not valid email <b>${email}</b> (symbol @ not exist)`;
} else if (email.indexOf('@') === 0) {
    email = `not valid email <b>${email}</b> (symbol @ find in first place)`;
} else if (email.indexOf('@') === email.length -1) {
    email = `not valid email <b>${email}</b> (symbol @ find in last place)`;
} else {
    email = `<b>${email}</b>`
}
yearOfBirth = prompt('What is your year of birth?');
currentYear = new Date().getFullYear();
age = currentYear - yearOfBirth;
document.write(`
    <ul>
        <li>First name: <b>${firstName}</b></li>
        <li>Last name: <b>${lastName}</b></li>
        <li>Email: ${email}</li>
        <li>Age: <b>${age}</b></li>
     </ul>
`)