require('dotenv').config();

console.log('hi');

console.log(process.env.SECRET_KEY); //read secret data from file .env
console.log(process.env.NODE_ENV);
