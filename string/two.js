function count(string){
    let num=0
    for(i=0;i<string.length;i++){
        value=1;
        for(j=i+1;j<string.length;j++){
            if(string[i]==string[j]){
                value++;
                num=num+1;
            }
        }
        console.log(string[i]+value);
    }
}


count("AAABBC")