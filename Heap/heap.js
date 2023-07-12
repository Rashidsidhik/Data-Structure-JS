class MaxBinaryHeap{
    constructor(){
        this.values=[]
    }

    insert(element){
        this.values.push(element);
        this.bubbleUp()
    }

    bubbleUp2(){
        let index=this.values.length-1
        element=this.values[index];
        while(index>0){
            parentIndex=Math.floor(index-1/2);
            parentElement=this.values[parentIndex];
            if(parentElement<element){
                temp=element;
                element=parentElement;
                parentElement=temp;
            }
        }
    }
    
    bubbleUp(){
        index=this.values.length-1;
        element=this.values[index];
        while(index>0){
            parentIndex = Math.floor((index-1)/2);
            parentElement = this.values[parentIndex];
            if(element>parentElement){
                temp = element;
                element = parentElement;    
                parentElement = temp;
            }
        }
    }
}