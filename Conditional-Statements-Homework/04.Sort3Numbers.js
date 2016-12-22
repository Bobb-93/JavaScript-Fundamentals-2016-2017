function solve(args) {
    let a = +args[0];
    let b = +args[1];
    let c = +args[2];

    if(a===b){
        if(b===c){
            console.log(a + " " + b + " " + c);
            return;
        }
    }
    if(a>=b){
        if(b>=c){
            console.log(a + " " + b + " " + c);
            //return;
        }
    }
    if(a>=c){
        if(c>=b){
            console.log(a + " " + c + " " + b);
            //return;
        }
    }
    if(b>=a){
        if(a>=c){
            console.log(b + " " + a + " " + c);
            //return;
        }
    }
    if(b>=c){
        if(c>=a){
            console.log(b + " " + c + " " + a);
            //return;
        }
    }
    if(c>=a){
        if(a>=b){
            console.log(c + " " + a + " " + b);
            //return;
        }
    }
    if(c>=b){
        if(b>=a){
            console.log(c + " " + b + " " + a);
            //return;
        }
    }
}

solve(['5', '1', '2']);
solve(['-2', '-2', '1']);
solve(['-2', '4', '3']);
solve(['0', '-2.5', '5']);
solve(['-1.1', '-0.5', '-0.1']);
solve(['10', '20', '30']);
solve(['1', '1', '1']);