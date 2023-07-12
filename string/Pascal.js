function capitalizeWord(word){
    return word[0].toUpperCase() + word.slice(1);
}

const toLittleCase=(str)=>{
    const sentArray= str.split(' ');
    const capArr = sentArray.map((word)=>{
        return capitalizeWord(word);
    })
    return capArr.join(' ')
}

console.log(capitalizeWord('hi world'));

console.log(toLittleCase('hi how are'));
