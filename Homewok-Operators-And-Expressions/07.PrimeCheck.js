function solve(args){
    var number = +args[0];
    var prime = true;
    if(number <= 1)
    {
        prime = false;
    }
    else if(number <= 100)
    {
        for(var i = 2; i <= Math.sqrt(number); i += 1)
        {
            if((number % i) === 0)
            {
                prime = false;
                break;
            }
        }
    }
    else{
        prime = false;
    }
    console.log(prime);
}

solve(['2']);
solve(['23']);
solve(['-3']);
solve(['0']);
solve(['1']);