function reverseStringQueue(str) {
    let queue = [];
    for (let i = 0; i < str.length; i++) {
        queue.push(str[i]);
    }
    let reversed = "";
    while (queue.length > 0) {
        reversed += queue.shift();
    }
    return reversed;
}

console.log(reverseStringQueue('malik'));