function solve(args) {
    let a = +args[0];
	
	let string = "";
	
    if(a>=0 && a<=19)
    {
        switch(a)
        {
            case 0: console.log("Zero"); break; 
            case 1: console.log("One"); break; 
            case 2: console.log("Two"); break;
            case 3: console.log("Three"); break; 
            case 4: console.log("Four"); break;
            case 5: console.log("Five"); break; 
            case 6: console.log("Six"); break;
            case 7: console.log("Seven"); break;
            case 8: console.log("Eight"); break; 
            case 9: console.log("Nine"); break;
            case 10: console.log("Ten"); break; 
            case 11: console.log("Eleven"); break; 
            case 12: console.log("Twelve"); break;
            case 13: console.log("Thirteen"); break; 
            case 14: console.log("Fourteen"); break;
            case 15: console.log("Fifteen"); break; 
            case 16: console.log("Sixteen"); break;
            case 17: console.log("Seventeen"); break;
            case 18: console.log("Eighteen"); break; 
            case 19: console.log("Nineteen"); break;
        }
    }

    if(a>=20 && a<=99)
    {
        let string = a.toString();
        let secondDigit = string[string.length-2];
        //console.log(secondDigit);
        let firstDigit = string[string.length-1];
        //console.log(firstDigit);
        let result = '';
        switch(secondDigit)
        {
            case '2': result+="Twenty"; break;
            case '3': result+="Thirty"; break; 
            case '4': result+="Forty"; break;
            case '5': result+="Fifty"; break; 
            case '6': result+="Sixty"; break;
            case '7': result+="Seventy"; break;
            case '8': result+="Eighty"; break; 
            case '9': result+="Ninety"; break;
        }

        switch(firstDigit)
        {
            case '0': result+=""; break;
            case '1': result+=" one"; break;
            case '2': result+=" two"; break;
            case '3': result+=" three"; break; 
            case '4': result+=" four"; break;
            case '5': result+=" five"; break; 
            case '6': result+=" six"; break;
            case '7': result+=" seven"; break;
            case '8': result+=" eight"; break; 
            case '9': result+=" nine"; break;
        }
        console.log(result);
    }

    if(a>=100 && a<=999)
    {
        let string1 = a.toString();
        let thirdDigit = string1[string1.length-3];
        //console.log(thirdDigit);
        let secondDigit = string1[string1.length-2];
        //console.log(secondDigit);
        let firstDigit = string1[string1.length-1];
        //console.log(firstDigit);
        let result = '';
        
        switch(thirdDigit)
        {
            case '1': result += "One hundred"; break;
            case '2': result += "Two hundred"; break;
            case '3': result += "Three hundred"; break; 
            case '4': result += "Four hundred"; break;
            case '5': result += "Five hundred"; break; 
            case '6': result += "Six hundred"; break;
            case '7': result += "Seven hundred"; break;
            case '8': result += "Eight hundred"; break; 
            case '9': result += "Nine hundred"; break;
        }
        if(secondDigit==='0')
        {
            switch(firstDigit)
            {
                case '0': result +=""; break;
                case '1': result +=" and one"; break;
                case '2': result +=" and two"; break;
                case '3': result +=" and three"; break; 
                case '4': result +=" and four"; break;
                case '5': result +=" and five"; break; 
                case '6': result +=" and six"; break;
                case '7': result +=" and seven"; break;
                case '8': result +=" and eight"; break; 
                case '9': result +=" and nine"; break;
            }
        }
        if(secondDigit==='1')
        {
            switch(firstDigit)
            {
                case '0': result +=" and ten"; break;
                case '1': result +=" and eleven"; break;
                case '2': result +=" and twelve"; break;
                case '3': result +=" and thirteen"; break; 
                case '4': result +=" and fourteen"; break;
                case '5': result +=" and fifteen"; break; 
                case '6': result +=" and sixteen"; break;
                case '7': result +=" and seventeen"; break;
                case '8': result +=" and eighteen"; break; 
                case '9': result +=" and nineteen"; break;
            }
        }
        if(secondDigit>=2 && secondDigit<=9)
        {
            switch(secondDigit)
            {
                case '2': result +=" and twenty"; break;
                case '3': result +=" and thirty"; break; 
                case '4': result +=" and forty"; break;
                case '5': result +=" and fifty"; break; 
                case '6': result +=" and sixty"; break;
                case '7': result +=" and seventy"; break;
                case '8': result +=" and eighty"; break; 
                case '9': result +=" and ninety"; break;
            }
            switch(firstDigit)
            {
                case '0': result +=""; break;
                case '1': result +=" one"; break;
                case '2': result +=" two"; break;
                case '3': result +=" three"; break; 
                case '4': result +=" four"; break;
                case '5': result +=" five"; break; 
                case '6': result +=" six"; break;
                case '7': result +=" seven"; break;
                case '8': result +=" eight"; break; 
                case '9': result +=" nine"; break;
            }
        }
        console.log(result);
    }
}

solve(['0']);
solve(['9']);
solve(['10']);
solve(['12']);
solve(['19']);
solve(['25']);
solve(['98']);
solve(['273']);
solve(['400']);
solve(['617']);
solve(['711']);
solve(['999']);