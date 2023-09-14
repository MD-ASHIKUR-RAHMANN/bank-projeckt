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
//
// function permiter use korle sei function kotaw teke call korle ekta variable a rakte hobe noile output asbena and function er vetor ki ghotbe seta function vetor diclear korte hobe bayre teke korle hobena

function add(one, two){
    return one + two
}
var result = add(15, 20);
console.log(result);