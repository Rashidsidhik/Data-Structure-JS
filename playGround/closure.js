class Counter{
    constructor(init){
       this.init=init;
       this.presentCount = init 
    }

    increment(){
        this.presentCount += 1;
        return this.presentCount;
    }

    decrement (){
        this.presentCount -= 1;
        return this.presentCount;
    }

    reset () {
        this.presentCount = this.init;
        return this.presentCount;
    }

    malik() {
        console.log('inside malik');
        console.log(init);
    }
}

var createCounter = function(init) {
    return new Counter(init)
};

var counter = createCounter(6);

// Call the increment method
var incrementedValue = counter.increment();
var malik = counter.malik();

console.log(incrementedValue);
console.log('malik'+malik);
