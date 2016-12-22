function solve(args){
    var a = +args[0];

    var mask = 1 << 3;
    console.log((a & mask)>>3);
    
    /*
    console.log(mask);
    //not working for some reason:
    if(a & mask === 0){
        console.log(0);
    }
    //else if(a & mask === 1){
    else{
        console.log(1);
    }   
    */
}

solve(['15']);
solve(['1024']);