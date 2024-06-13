// Declare a global counter variable.
// Create a simple function that increments the variable, and then calls itself recursively.
// Surround the initial function call in a try/catch block.
// Within the catch, log the error and the value of the counter variable.
// declared
let counter = 0;

function recursiveFunc() {
  // Base case ( end our recurive call)
  counter++;
  recursiveFunc();
}

//End iteration condition
// Incrementing
// Declared

try {
  recursiveFunc();
} catch (error) {  
  //console.error("Stack overflow error caught :)", error);
  console.log("Number of recursive calls before stack overflow :", counter);
}
//part2

let testArray = [1,2,3,[[5,6,2,4,],[6,8]]]
function flattenArray (array) {
  result =[];

   for (let i = 0; i < array.length; i++) {
    if(Array.isArray(array[i])){
      reault =result.concat(flattenArray(array[i]))
    } else{
       result.push(array[i])
    }
   } return result
}
console.log(flattenArray(testArray));


   