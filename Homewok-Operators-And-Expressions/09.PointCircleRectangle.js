function solve(args){
    var x = +args[0];
    var y = +args[1];
    
    var dist = Math.sqrt((x-1)*(x-1) + (y-1)*(y-1));
    var checkCircle = (dist <= 1.5) ? "inside circle" : "outside circle";

    var checkRectangle = ((x>=-1 && x<=5) && (y>=-1 && y<=1)) ? "inside rectangle" : "outside rectangle";

    console.log(checkCircle + " " + checkRectangle);
}

solve(['2.5', '2']);
solve(['0', '1']);
solve(['2.5', '1']);
solve(['1', '2']);
