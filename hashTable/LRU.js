class LRU{
    constructor(capacity){
        this.capacity = capacity;
        this.cache = new Map();
    }

    putItem(key,value){
        if(this.cache.has(key)){
            this.cache.delete(key)
        }else if(this.cache.size === this.capacity){
            this.cache.delete(key)
        }
        this.cache.set(key,value)
    }

    getItem(key){
        const item=this.cache.get(key);
        if(item){   
            this.cache.delete(key);
            this.cache.set(key,item);
        }
        return item;
    }

    get OldestItem(){
        return this.cache.keys().next().value
    }
}

const cache= new LRU(5)

cache.putItem('a',5);
cache.getItem('a');
