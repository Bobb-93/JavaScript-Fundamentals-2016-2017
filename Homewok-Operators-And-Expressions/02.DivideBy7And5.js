function solve(args) {
    var a = +args[0];

    var condition = ((a%5 === 0) && (a%7 ===0)) ? true : false;

    console.log(condition + " " + a);
}

solve(['3']);
solve(['0']);
solve(['5']);
solve(['7']);
solve(['35']);
solve(['140']);