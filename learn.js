
let a=20;


const b=()=>{
    console.log(a)
    const c=()=>{
        console.log(a)
        let crucial="hello"
        console.log(crucial);
    }
    c();
}

b()