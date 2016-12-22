function solve(args) {
    let a = +args[0];
    let b = +args[1];
    let c = +args[2];
    let d = +args[3];
    let e = +args[4];
    
    if(a===b)
    {
        if(b===c)
        {
            if(c===d)
            {
                if(d===e)
                {
                    console.log(a);
                    return;
                }
            }
        }
    }
    if(a>=b)
    {
        if(a>=c)
        {
            if(a>=d)
            {
                if(a>=e)
                {
                    console.log(a);
                }
            }
        }
    }
    if(b>=a)
    {
        if(b>=c)
        {
            if(b>=d)
            {
                if(b>=e)
                {
                    console.log(b);
                }
            }
        }
    }
    if(c>=a)
    {
        if(c>=b)
        {
            if(c>=d)
            {
                if(c>=e)
                {
                    console.log(c);
                }
            }
        }
    }
    if(d>=a)
    {
        if(d>=b)
        {
            if(d>=c)
            {
                if(d>=e)
                {
                    console.log(d);
                }
            }
        }
    }
    if(e>=a)
    {
        if(e>=b)
        {
            if(e>=c)
            {
                if(e>=d)
                {
                    console.log(e);
                }
            }
        }
    }
}

solve(['5', '2', '2', '4', '1']);
solve(['-2', '-22', '1', '0', '0']);
solve(['-2', '4', '3', '2', '0']);
solve(['0', '-2.5', '0', '5', '5']);
solve(['-3', '-0.5', '-1.1', '-2', '-0.1']);