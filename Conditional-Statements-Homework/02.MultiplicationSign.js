function solve(args){
    let a = +args[0];
    let b = +args[1];
    let c = +args[2];

    if(a===0 || b===0 || c===0){
        console.log(0);
    }
    if((a>0 && b>0 && c>0) || (a<0 && b<0 && c>0) || (a<0 && b>0 && c<0) || (a>0 && b<0 && c<0)){
        console.log('+'); 
    }
   
    if((a<0 && b>0 && c>0) || (a>0 && b<0 && c>0) || (a>0 && b>0 && c<0) || (a<0 && b<0 && c<0)){
        console.log('-'); 
    }   
}

solve(['5', '2', '2']);
solve(['-2', '-2', '1']);
solve(['-2', '4', '3']);
solve(['0', '-2.5', '4']);