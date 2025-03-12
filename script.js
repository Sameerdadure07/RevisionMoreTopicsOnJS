// difference betn var and let

// var / let / const

// var old js me tha (es5)
// var function scope hai
// var add itself to window (leak kr ta hai)


// let const new js me hai (es6)
// let const braces{} scope hai
// let const dosen't add itself to window (secure hai)

function ab(){
    for(var i=1;i<=5;i++){
        console.log(i);
    }
    console.log(i); // last me 6 bhi pring hora hai

    // agar let use kiya hota tho fir for ke bahar use nhi kr sakhte the
}

ab();

// js language kuch chize nhi kr sakhta hai pr who karta hai with the help of browser uusi ko ham window kahate hai.
//aise bohot sare features hai jaise alert,prompt jo JS browser ke help seh window seh krta hai.
// browser ke andar kai sare features hai jo ki window me hai.

var a = 1; //add itself in window

let b = 2; // dosent add itself to window

//*******

//Browser 3 chize deta hai 
//1) Window
//2) Stack
//3) Heap Memory

//  stack - Firat in First Out

//  Heap Memory - Store variables and Data

//******
 
//Execution Contex

// var
// function ke andar ka function hhe
// lexical environment - kya acces kr sakhte hai or kya nhi

function hel(){
    var aa = 12;
    function hhe(){
        var bb =13;
    }
}

// *****

// how to copy reference value 

var ab = [1,2,3,4,5];
var bc = ab;

bc.pop();


console.log(bc);
console.log(ab);

// change sirf bc ko kr rahe hai pr ab bhi change ho raha hai
// To solve that problem we use Spread Operator

var abc = [1,2,3,4,5];
var bcc = [...abc];

bcc.pop();


console.log(bcc);
console.log(abc);

// bcc he change hoga abc nhi.

// *****

// Truthy And Falsy

// in conditional statements we can put any conditions it can be true or false. 

// Falsy - 0 NaN false undefined null document.all

// Truthy - Other than falsy every thing is truthy


// *****

// ForEach Loop - It is only aplicabel on a Arrys

let as = [4,1,6,8,9,2];

as.forEach(function(val){
    console.log(val+2);
});

console.log(as); //main array kabhi change nhi hota uski copy change hoti hai

// Forin Loop - This llop is Only applicabel on objects.

let obj ={
    name:'veery',
    id:12,
    rollno:3,
    course:'aiml'
}

for (let key in obj){
    console.log(key,obj[key]);  
}

// Callback Function 

// Function Runs on demand of time. 
// Function tab run hoga jam Uska time ho jayega kuch samay baaad function run hoga.

setTimeout(() => {
    console.log('Run in 2 Seconds');
}, 2000);

// First Class Function

// Treat Function as a value

function abcd(a){
    a();
}

abcd(function(){console.log('First Class Function');
})


