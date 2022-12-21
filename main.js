
//Write a function that takes in a number and returns true if the number is even, and false if the number is odd.

function isEven(num){
    return num&2 === 0;
}
/*
Write a function named greaterNum that:
takes 3 arguments, all numbers.
returns whichever number is the greater (higher) number.

*/ 
function greaterNum(num1,num2,num3){
    if(num1 > num2){
        if(num1 > num3){
            return num1;
        }
        return num3;
    }
    if(num2 < num3){
        return num3;
    }
    return num2;
}

console.log(greaterNum(1,2,3));
console.log(greaterNum(5,7,6));

/*
Write a function named helloWorld that:
takes 1 argument, a language code (e.g. "es", "he", "en")
returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
*/

function helloWorld(language){
    if(language === 'he'){
        return "שלום עולם";
    }
    else if(language === "es"){
        return "Hola Mundo";
    }
    return "Hello World"
}
console.log(helloWorld("he"))
console.log(helloWorld("es"))
console.log(helloWorld("en"))
/*
Write a function named assignGrade that:
takes 1 argument, a number score.
returns a grade for the score, either "A", "B", "C", "D", or "F".
(A for: 90-100, B for: 80-89, C for: 70-79, D for: 60-69, F for 59 or lower)  
*/
function assignGrade(score){
    if(score >= 90 && score <= 100){
        return "A";
    }
    else if(score >= 80){
        return "B";
    }
    else if(score >= 70){
        return "C";
    }
    else if(score >= 60){
        return "D";
    }
    
    return "F";
}
console.log(assignGrade(89))
console.log(assignGrade(77))
/*
Write a function named pluralize that:
takes 2 arguments, a noun and a number.
returns the number and pluralized form, like "5 cats" or "1 dog".
Call that function for a few different scores and log the result to make sure it works.
Bonus: Make it handle a few collective nouns like "sheep" and "geese"
*/
function pluralize(noun,num){
    if(noun === "sheep"){
        return `${num} geese`;
    }
    return `${num} ${noun}`;
}

/*
Using logical operators, write an expression that represents the following statement:
 "I would like an ice cream with strawberry and chocolate, or stracciatella,
  or an ice cream of any flavor but caramel."
*/
// ("ice cream" && "chocolate"  && "strawberry") ||( "ice cream" && "stracciatella") ||("ice cream" && "chocolate"  && "strawberry" && "stracciatella")


/*
a function that uses “prompt” asking the user to write their name,
 use “document.write” to print “Hello, __(name)__, Welcome!”, if there
  is no name inputted print the text “Hello friend, Welcome!”.
*/
function helloFriend(){
    let name = window.prompt("what is your name amigo?");
    if(name == 0 ){
        document.write("Hello friend, Welcome!");
    }
    else{
        document.write(`Hello ${name}, Welcome!`);
    }
}
helloFriend();

/*
Write a function that takes in a number and prints a message based on the following conditions: 
If the number is positive and odd, print "Positive and odd"If the number is positive and even, print "Positive and even"
 If the number is negative and odd, print "Negative and odd"
If the number is negative and even, print "Negative and even"
 If the number is zero, print "Zero"
*/

function whatIsThisNum(num){
    if(num === 0){
        console.log("Zero");
    }
    else if( num > 0){
        if(num %2 === 0){
            console.log("Positive and even");
        }
        else{
            console.log("Positive and odd");
        }
    }
    else{
        if(num %2 === 0){
            console.log("Negative and even");
        }
        else{
            console.log("Negative and odd");
        }
    }
}

whatIsThisNum(-10)
whatIsThisNum(10)


/*
Write a function `calculator()` thats get 3 arguments : num1,num2,operand (“+”,”-”,”/”,”%”,”*”) and return the answer of the equation. 
*/
function calculator(num1,num2,operator){
    if(operator ==="+"){
        return num1 + num2;
    }
    if(operator ==="-"){
        return num1 - num2;
    }
    if(operator ==="/"){
        if(num2 === 0){
            return "Cannot divide by zero"
        }
        return num1 + num2;
    }
    if(operator ==="%"){
        return num1 % num2;
    }
    if(operator ==="*"){
        return num1 * num2;
    }
    return "Invalid operator"

}

//EX12
function isLeapYear( year){
    if(year %4 === 0){
        if(year %100 === 0 && year %400 === 0){
            return true
        }
        if(year < 100){
            return true;
        }

    }
    return false;
}

//EX13
function arreng(num1,num2,num3){
    if(num1 > num2){
        if(num1 > num3){
            if(num2 > num3){
                return`${num1},${num2},${num3}`;
            }
            return`${num1},${num3},${num2}`;
        }
        return`${num3},${num1},${num2}`; 
    }
    if(num2 > num3){
        if(num3 < num1){
            return`${num2},${num1},${num3}`; 
        }
        return`${num2},${num3},${num1}`; 
    }
} 

//EX14
function shuttleSafty(crewStatus,computerStatusCode,shuttleSpeed){
    //crewStatus
    if(crewStatus){
        console.log('Crow Ready');
    }
    else{
        console.log('Crow not Ready');
    }
    //computerStatusCode
    switch (computerStatusCode){
        case 200:
            console.log("Please stand by. Computer is rebooting.");
        break;
        case 400:
            console.log("Success! Computer online.")
        break;
        default:
            console.log("ALERT: Computer offline!")
    }
     //shuttleSpeed
     if(shuttleSpeed > 17500){
        console.log('"ALERT: Escape velocity reached!');

    }
    if(shuttleSpeed < 8000){
        console.log("ALERT: Cannot maintain orbit!");
    }
    else{
        console.log("Stable speed");
    }
    }


//EX15
    function switching(somting){
        switch(somting){
            case "red":
                console.log('Red is the color of danger')
            break;
            
            case "orange":
                console.log('Orange is the color of caution')
            break;
            
            case "yellow":
                console.log('Yellow is the color of sunshine')
            break;
            
            case "green":
                console.log('Green is the color of nature')
            break;
            
            case "blue":
                console.log('Blue is the color of the sky')
            break;
            
            case "purple":
                console.log('Purple is the color of royalty')
            break;
            
            default:
                console.log('Invalid color')
        }
    }
   switching('red')