function solve(args) {
    let a = +args[0];
    let b = +args[1];
    let c = +args[2];
    
    if(a===b)
    {
        if(b===c){
            console.log(a);
            return;
        }
    }
    if(a>=b)
    {
        if(a>=c)
        {
            console.log(a);
        }
    }
    if(b>=a)
    {
        if(b>=c)
        {
            console.log(b);
        }
    }
    if(c>=b)
    {
        if(c>=a)
        {
            console.log(c);
        }
    }
}

solve(['2', '2', '2']);
solve(['5', '2', '2']);
solve(['-2', '-2', '1']);
solve(['-2', '4', '3']);
solve(['0', '-2.5', '5']);
solve(['-0.1', '-0.5', '-1.1']);
solve(['-0.11', '-0.12', '-0.3']);