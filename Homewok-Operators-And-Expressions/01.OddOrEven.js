function solve(args) {
    var a = +args[0];

    if(a%2 === 0){
        console.log('even ' + a);
    }
    else if(a%2 !== 0){
       console.log('odd ' + a);
    }
}

solve(['3']);
solve(['2']);
solve(['-2']);
solve(['-1']);
solve(['0']);

