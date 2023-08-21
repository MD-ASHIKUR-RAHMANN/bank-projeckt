//
var n = 2.164;
var result = Math.floor(n);
var result2 = Math.ceil(n);
var result3 = Math.round(n);
var randomN = Math.random()*6;
var output = Math.round(randomN);
console.log(output);
//
//max-test
x=5;
y=6;
p=3;
var mxTst= Math.max(x,y,p);
console.log(mxTst)
//
// var mx=[5,8,94,45,97];
// mx =Math.max;
// console.log(mx)
//
var x = 20;
var cool = true;
var hot = false;
var lowercase = "I Will Do"
//
console.log(lowercase.toLowerCase());
console.log(lowercase.indexOf("Do"));
console.log(lowercase.indexOf("do"));
var number = "20";
var number2 = 20.2;
number2 = ""+number2;
console.log(typeof number2);
//kono value string ^ bananor jonno
var number = "20";
var number2 = 20.2;
console.log(number + number2);
//string convert to number way
number =  parseFloat(number)
console.log(number);
//
number2 = parseInt(number2)
console.log(number2);
//
console.log(number + number2);
//
var name = "me";
var name2 = "you";
//for space kono value teke arekta value te space dite
console.log(name + " " + name2)
// use if & else
var mobile = "100tk";
if (mobile >"99tk"){
    console.log("i cant");
}
else{
    console.log("i will");
}
if (mobile == "99tk"){
    console.log("i will");
}
else{
    console.log("i cant");
}
// == jodi equel na hoy bujanor jonno
if (mobile != "199tk"){
    console.log("i will");
}
else{
    console.log("i cant");
}
// more variable eksate output korate && dite hobe like
var x = 1;
var y = 2;
if (x == 1 && y == 1){
    console.log("i will");
}
else{
    console.log("i cant");
}
//array + array likte [] er vetor likte hobe
let fndAge = [12, 16,14];
console.log(fndAge);
//array teke kono element variable a rakte
two = fndAge [2];
console.log(two);
//for element value set change
fndAge[1] = 21;
console.log(fndAge);
//indexof mean positon of array
// for positon check
var positon = fndAge.indexOf (12);
console.log(positon);
// if any positon result -1 so its mean thats value not
//////----------//////////
// for pus array  mean add array in line last

fndAge.push("something");
// for add element before
fndAge.unshift("add");
// array er vetor koto gula array ase jante fast array name die sate . die length dite hobe
console.log(fndAge.length);
// array pop er kaj ber kore dewa 
fndAge.pop();
console.log(fndAge);
// array shift er kaj samne teke ber kora
fndAge.shift();
console.log(fndAge);
// for slice mean kisu element ba dite
var line = ["1", "3","5","6","8",];
line.slice(2);
console.log(line);
// slice main array cant change but splice can it
// for change nedd new array name creat 
var line = ["1", "3","5","6","8",];
var creatNew = line.slice(2);
console.log(creatNew);
//
var line = ["1", "3","5","6","8",];
var creatNew = line.slice(2, 4);
console.log(creatNew);
// while lop.
var number = 5;
while(number < 10){
    console.log(number);
    number++;
    // or
    number = number +1;
}
// eta soman value ubdi output korbe for add < = >
var number2 = 3;
while(number2 <= 8){
    console.log(number2)
    number2 = number2 + 1;
}
//for loop
// forlooper kaj 1st for er ()brakete var creat hobe i die + baki gulo sekane hobe
for (var i=0; i < 5; i++){
    console.log(i)
}
// length er kaj kotogula array ase kuje ber kora
var age= [12,225,15,65,54];
for(var i = 0; i < age.length; i++){
    var element = age[i];
    console.log(element)
}
//or
var fnds= ["me","you","he","she"];
for(var i = 0; i < fnds.length; i++){
    var valueCk = fnds[i];
    console.log(valueCk)
}