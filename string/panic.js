function panic(str){
    return str.split(' ').join(' 😱 ').toUpperCase()
}

const panic2=str=>str.split(' ').join(' 😱 ').toUpperCase()

// Test your function
console.log(panic("I'm almost out of coffee")); 
console.log(panic("winter is coming"))
console.log(panic2("winter is coming"))