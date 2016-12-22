function solve(args){
    var a = +args[0];
    //var thirdDigit = (a / 100) % 10;
    var string = a.toString();
    if(a <= 99)
    {
        console.log("false 0");
        return;
    }
    var thirdDigit = string[string.length-3];

    var condition = (thirdDigit === '7') ? 'true' : 'false ' + thirdDigit;
    console.log(condition);
}

solve(['5']);
//Two important cases, which aren't included:
solve(['99']);
solve(['199']);

solve(['701']);
solve(['9703']);
solve(['877']);
solve(['777877']);
solve(['9999799']);