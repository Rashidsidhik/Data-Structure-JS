function changeString(string,key){
    let newKey= key % 26;
    let array=""
    for(i=0;i<string.length;i++){
        let position=string.charCodeAt(i) + newKey;
        if(position<=122){
            array =array+String.fromCharCode(position)
        }else{
            array=array+String.fromCharCode((96+position)%122)
        }
    }
    console.log(array);
    return array
}

 changeString("hai malik dinar",3)