const animal={
    alive:true
}

const dog={
    bark:true
}


Object.setPrototypeOf(animal,dog)
console.log(Object.getPrototypeOf(animal) === animal.__proto__)


const p1 = Object.create(animal)
console.log(p1.__proto__);
