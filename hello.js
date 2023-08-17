console.log("Hello, World!");

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Please enter your name: ', (name) =>{
    r1.question('Pleaser enter your email: ', (email)=>{
        if (name.trim( ) === '' || email.trim() === ''){
            console.log('Both name and email are mandatory fields.');
        } else{
            console.log('User details:');
            console.log('Name:', name);
            console.log('Email', email);
        }
        r1.close();
    })
})