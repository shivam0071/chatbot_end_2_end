function log(message) {
    console.log(message);
}
var message = "Helloo World";
log(message);
function understanding_let() {
    for (var i = 1; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}
understanding_let();
// if we use var keyword then the scope of i is in the full block but using let keyword
// will restrict it to the closest block
// main.ts:15:17 - error TS2304: Cannot find name 'i'.
var count = 5;
//count = a; Can't do this even though it tsc to js
// data types
var a;
var b;
var c;
var d;
var e; //Array
var f = [1, true, 'a', false];
// IN JS
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
// In TS we can use
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var BGC = Color.Red;
//enum Color{Red = 0, Green = 1, Blue = 2};
var msg;
msg = "abc";
msg.endsWith("g");
//(<string> msg).endsWith("g");
// LAMBDA FUNC ( arrow function )
var doLog = function (message) { return console.log(message); };
doLog("Hey YO");
