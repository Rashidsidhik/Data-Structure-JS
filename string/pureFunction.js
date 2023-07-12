
let msg = "hoooo";

function cap(msg) {
    return msg.toUpperCase();
}

const cap2=msg => msg.toUpperCase();   //==  const cap2=(msg) => msg.toUpperCase(); // consise body arrow function


console.log(cap(msg));
console.log(cap("Ajay  vasu devan nair"));
console.log(cap2("malik dinar"));