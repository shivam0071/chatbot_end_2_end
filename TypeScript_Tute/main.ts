function log(message){
console.log(message);
}

var message = "Helloo World";

log(message);


function understanding_let(){

for (var i= 1; i < 5; i++){
    console.log(i);
    }
    console.log(i);
}

understanding_let();
// if we use var keyword then the scope of i is in the full block but using let keyword
// will restrict it to the closest block
// main.ts:15:17 - error TS2304: Cannot find name 'i'.

let count = 5;
//count = a; Can't do this even though it tsc to js

// data types
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[]; //Array
let f: any[] = [1,true, 'a', false];

// IN JS
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

// In TS we can use
enum Color{Red, Green, Blue};
let BGC = Color.Red;


//enum Color{Red = 0, Green = 1, Blue = 2};

let msg;
msg = "abc";
msg.endsWith("g");
//(<string> msg).endsWith("g");

// LAMBDA FUNC ( arrow function )
let doLog = (message) => console.log(message);

doLog("Hey YO")