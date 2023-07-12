var values = []

for(var i = 0; i < 10 ;i++) {
    values.push(function(){
        console.log(i);
        return i
    })
}

for(var i = 0; i < 10; i++) {
    console.log(values[i]());
}




