function solve(args){
    var x = +args[0];
    var y = +args[1];

    var distance = Math.sqrt((x-0)*(x-0) + (y-0)*(y-0));
    var check = (distance <= 2) ? "yes " + distance.toFixed(2) : "no " + distance.toFixed(2);
    
    console.log(check);
}

solve(['-2', '0']);
solve(['-1', '2']);
solve(['1.5', '-1']);
solve(['-1.5', '-1.5']);

solve(['100', '-30']);
solve(['0', '0']);
solve(['0.2', '-0.8']);
solve(['0.9', '-1.93']);
solve(['1', '1.655']);
solve(['0', '1']);
