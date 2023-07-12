class circularQueue{
    constructor(capacity){
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.rear= -1;
        this.front= -1;
    }

    isFull=()=> this.currentLength === this.capacity;
    isEmpty=()=> this.currentLength === 0;

    enqueue=(element)=>{
        if(!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = element;
            this.currentLength++;
            if(this.front == -1){
                this.front = this.rear
            }
        }
    }

    dequeue=()=>{
        if(this.isEmpty()){
            return null
        }
        item = this.items[this.rear]
        this.items[this.rear] = null;
        this.front = (this.front +1) % this.capacity;
        this.currentLength--;
        if(this.isEmpty()){
            this.front = -1;
            this.rear = -1;
        }
        return item
    }
    peek=()=> !this.isEmpty() ? this.items[this.front] :null;

    print=()=>{
        if(this.isEmpty()){
            console.log('empty queque');
        }else{
            let i
            let str=''
            for(i=this.front;i!==this.rear;i=(i+1)%this.capacity){
                str +=this.items[i]+ ""
            }
            str += this.items[i]
            console.log(str);
        }
    }
}