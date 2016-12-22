function solve(args) {
    let a = +args[0];
    let b = +args[1];
    let c = +args[2];
    
    let D = (b*b) - (4*a*c);
    if(D<0){
        console.log("no real roots");
    }
    if(D===0)
    {
        let x = (-b) / (2*a);
        console.log("x1=x2=" + x.toFixed(2));
    }
    if(D>0)
    {
        let x1 = ((-b) + Math.sqrt(D)) / (2*a);
        let x2 = ((-b) - Math.sqrt(D)) / (2*a);
        
        if(x1 < x2){
            console.log("x1=" + x1.toFixed(2) + "; x2=" + x2.toFixed(2));
        }
        else{
            console.log("x1=" + x2.toFixed(2) + "; x2=" + x1.toFixed(2));
            
        }
    }
}

solve(['2', '5', '-3']);
solve(['-1', '3', '0']);
solve(['-0.5', '4', '-8']);
solve(['5', '2', '8']);
solve(['0.2', '9.572', '0.2']);