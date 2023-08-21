// function kayeword can use anywere 
//how to declear 
function name(){
 console.log("something");
 console.log("someone");
}
//how to call function
name();
//
function name(me){
    var result = me * 2;
    console.log(result)
}
name(5);
// return value
function valueSet(age){
    var ageCng= age * 2;
    return ageCng
}
var fst = valueSet(20);
var scnd = valueSet(5);
console.log(scnd)