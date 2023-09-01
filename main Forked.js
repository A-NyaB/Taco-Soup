// var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];

// for(let i = 0; i < harryPotterTitles.length; i++){
    // console.log( `Harry Potter`, harryPotterTitles[i]);
// }

//var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]

//for(let i = 0; i < grades.length; i++){
  //  if(grades[i] >= 0 && grades[i] <= 69){
    //    console.log(`You got an F`)
    //} else if(grades[i] >= 70 && grades[i] <= 76){
      //  console.log(`You got a D`)
        //} else if(grades[i] >= 77 && grades[i] <= 84){
          //  console.log(`You got a C`)
        //} else if(grades[i] >= 84 && grades[i] <= 92){
        //    console.log(`You got a B`)
        //} else if(grades[i] >= 93 && grades[i] <= 100){
         //   console.log(`You got an A`)
        //}
    // }
    
let aGrades = {
    score: 0,
    actualGrade: "A"
}
let bGrades = {
    score: 0, 
    actualGrade: "B"
}
let cGrades = {
    score: 0, 
    actualGrade: "C"
}
let dGrades = {
    score: 0, 
    actualGrade: "D"
}
let fGrades = {
    score: 0,
    actualGrade: "F"
}


var grade = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]
let percentageGrades = 0
let letterGrades = 0

for(let taco = 0; taco < grade.length; taco++){
    percentageGrades += grade[taco]

if(grade[taco] < 69){
    console.log("You got an F")
    fGrades.score++
} else if(grade[taco] >= 70 && grade[taco] <= 76){
    console.log("You got a D")
    dGrades.score++
} else if(grade[taco] >= 77 && grade[taco] <= 84){
    console.log("You got a C")
    cGrades.score++
} else if(grade[taco] >= 85 && grade[taco] <= 92){
    console.log("You got a B")
    bGrades.score++
} else if(grade[taco] >= 93 && grade[taco] <= 100){
    console.log("You got an A")
    aGrades.score++
}}

let highScore = {
    score: 0, 
    actualGrade: "", 
    percentageGrades: 0
}

for(let i = 0; i < grade.length; i++){
   
}

let totalGrades = [aGrades.score, bGrades.score, cGrades.score, dGrades.score, fGrades.score]
{
    if(totalGrades[i] > highScore.score){
        highScore = totalGrades[i]
    }}

console.log(`High score is:`, highScore)
console.log(aGrades)
console.log(bGrades)



for(var i in grade){
  percentageGrades === totalGrades + grade[taco], taco++
}



console.log(`PG`,percentageGrades)
console.log(`TG`,TGnumerator)
let commonPercentage = percentageGrades / grade.length
console.log(`CP`,commonPercentage)

//for(let i = 2; i <= 8; i += 2){
  //  console.log(i, `who do we appreciate?!`)
//}
//Tommy's version
//let cheerString = ""
//for(let i = 2; i <= 8; i += 2){
  //  cheerString += `${i} `
//}
//cheerString += "who do we appreciate?!"
//console.log(cheerString)

//let number = 3


//if(  7 % number === 1 ){
  //  console.log("Correct!!!!!!!!")
//}