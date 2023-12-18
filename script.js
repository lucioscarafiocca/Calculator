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
  } else if (op === "−") {
    return substract(a,b)
  } else if (op === "÷") {
    return divide(a,b)
  } else if (op === "*") {
    return multiply(a,b)
  } else{}
}



const code = [7,8,9,4,5,6,1,2,3,0]
const numbers = document.querySelectorAll(".numbers")
numbers.forEach((element) => {
  let main = `${code[0]}`
  code.shift()
  element.addEventListener("click", () => {
    document.getElementById("text").innerHTML += `${main}`
     })})


const op = ["÷","−","+","*",]
const opss = document.querySelectorAll(".ops")
opss.forEach((element) => {
  let mains = `${op[0]}`
  op.shift()
  element.addEventListener("click", () => {
    let answer = calc()
    if (chest()) {
    document.getElementById("text").innerHTML += `${mains}`}
    else if (answer != false) { 
      let apple = document.getElementById("text").innerHTML = `${mains}`
      if (typeof(answer) === "number" ) {
        document.getElementById("text").innerHTML = answer + apple
      } else { }}
     })})


const equals = document.querySelector(".equals")
equals.addEventListener("click", () => {
  let answer = calc()
  if (typeof(answer) === "number" && answer !== Infinity ) {
    document.getElementById("text").innerHTML = answer
  } else if (answer == Infinity) {
    alert("You reached infintiy and broke the calculator, thanks!")
   } else{}
  
})

 

const dots = document.querySelector(".dot")
dots.addEventListener("click", () => {
  const text = document.getElementById("text")
  let f = text.textContent
  let arrayf = f.split("")
  if (arrayf.indexOf(".") == -1) {
    document.getElementById("text").innerHTML += "."
  }
  else {}}
)








function calc () {
  const text = document.getElementById("text")
  let f = text.textContent
  let arrayf = f.split("")
  let search = checkop(arrayf)
  if (search != "no") {
    let hal1 = arrayf.slice(0,search)
    let hal2 = arrayf.slice(search, arrayf.length)
    let mid = hal2.shift()

    let half1 = check(hal1)
    let half2 = check (hal2)
    let middle = mid.toString()

    let result = operator(half1,half2,middle)
   if (result !== NaN && (half1 != "wrong") && (half2 != "wrong") && (middle != ".")) {
    return result
   }
   else {
    return false
   }
    
  } else {} }

function checkop (array) {
  if (array.indexOf("+") != -1) {
    let result = array.indexOf("+")
    return result
  } else if ((array.indexOf("*") != -1)){
    let result = array.indexOf("*") 
    return result
  } else if ((array.indexOf("−") != -1)) {
    let result = array.indexOf("−") 
    return result
  } else if ((array.indexOf("÷") != -1)) {
    let result = array.indexOf("÷") 
    return result
  } else {
    let result = "no"
    return result
  }
}


function check (a) {
  if (a.length != 0) {
    let result = Number(a.join(""))
    return result}
  else { 
    let result = "wrong"
     return result}
}

function chest () {
  const text = document.getElementById("text")
  let c = text.textContent
  let a = c.split("")
  if (a.includes("+")){
    return false
  }else if (a.includes("−")){
    return false
} else if (a.includes("÷")){
  return false}
  else if (a.includes("*")){
  return false}
  else if (a.includes(".")) {
    return true
  } else { return true}
  }




  

// const multiply = function([a,...array]) {
//return ([...array].reduce((total,numbers) => total * numbers,a))};