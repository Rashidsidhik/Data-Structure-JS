const numbers = [1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6]


const filteredArray = numbers.filter((num, index)=>{
    console.log(numbers.indexOf(num)+'='+index);
    if(numbers.indexOf(num) === index){
        if(num[index+1] === num[index]){
            return num
        }
    }
})

console.log(filteredArray);