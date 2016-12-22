function solve(args){
    let a = +args[0];
    let b = +args[1];
    
    if(a > b)
    {
        let c = a;
        a = b;
        b = c;
    }

    console.log(a + " " + b);
}

solve(['5', '2']);
solve(['3', '4']);
solve(['5.5', '4.5']);