function add (a,b) {
  return (a + b)
 }

 function substract (a,b) {
  return (a - b)
 }

 function divide (a,b) {
  return (a / b)
 }

 function multiply (a,b) {
  return (a * b)
 }


function operator (a,b,op) {
  if (op === "+") {
    return add(a,b)
  } else if (op === "-") {
    return substract(a,b)
  } else if (op === "/") {
    return divide(a,b)
  } else {
    return multiply(a.b)
  }
}
 

console.log(multiply(7,8))
  

// const multiply = function([a,...array]) {
//return ([...array].reduce((total,numbers) => total * numbers,a))};