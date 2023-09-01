var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];

 for(let i = 0; i < harryPotterTitles.length; i++){
     console.log( `Harry Potter`, harryPotterTitles[i]);
 }

var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]

for(let i = 0; i < grades.length; i++){
    if(grades[i] >= 0 && grades[i] <= 69){
        console.log(`You got an F`)
    } else if(grades[i] >= 70 && grades[i] <= 76){
        console.log(`You got a D`)
        } else if(grades[i] >= 77 && grades[i] <= 84){
            console.log(`You got a C`)
        } else if(grades[i] >= 84 && grades[i] <= 92){
            console.log(`You got a B`)
        } else if(grades[i] >= 93 && grades[i] <= 100){
            console.log(`You got an A`)
        }
     }
    
    let aGrades = 0;
    let bGrades = 0;
    let cGrades = 0;
    let dGrades = 0;
    let fGrades = 0;
    let mostCommonGrade = "";
    let mostCommonGradeCount = 0
    let totalGradePoints = 0


var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]

for (let taco = 0; taco < grades.length; taco++) {
    totalGradePoints += grades[taco]
    if (grades[taco] <= 69) {
        console.log("You got an F")
        fGrades++

    } else if (grades[taco] >= 70 && grades[taco] <= 76) {
        console.log("You got a D")
        dGrades++

    } else if (grades[taco] >= 77 && grades[taco] <= 84) {
        console.log("You got a C")
        cGrades++

    } else if (grades[taco] >= 85 && grades[taco] <= 92) {
        console.log("You got a B")
        bGrades++

    } else if (grades[taco] >= 93 && grades[taco] <= 100) {
        console.log("You got an A")
        aGrades++
    }
}

for (let i = 0; i < grades.length; i++) {
    if (mostCommonGradeCount < aGrades) {
        mostCommonGradeCount = aGrades
        mostCommonGrade = "A"
    } else if (mostCommonGradeCount < bGrades) {
        mostCommonGradeCount = bGrades
        mostCommonGrade = "B"
    } else if (mostCommonGradeCount < cGrades) {
        mostCommonGradeCount = cGrades
        mostCommonGrade = "C"
    } else if (mostCommonGradeCount < dGrades) {
        mostCommonGradeCount = dGrades
        mostCommonGrade = "D"
    } else if (mostCommonGradeCount < fGrades) {
        mostCommonGradeCount = fGrades
        mostCommonGrade = "F"
    }
}

percentageGrades = totalGradePoints / grades.length

console.log(mostCommonGrade, mostCommonGradeCount, "Most common grade")
console.log(percentageGrades, "This is an average of grades")
console.log(`The average percent is ${Math.ceil(percentageGrades)}`)
console.log(aGrades, "This is A grades")
console.log(bGrades, "This is B Grades")


let cheerString = ""
for(let i = 2; i <= 8; i += 2){
    cheerString += `${i} `
}
cheerString += "who do we appreciate?!"
console.log(cheerString)


var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

let sentence = ""

for(let i=0; i < sentenceArray.length; i++ ){

    if(( i %  3) === 0 && i !== 0){
        sentence += `MOOOOOOOOOOO ${sentenceArray[i]} `
    }
    else{

        sentence += `${sentenceArray[i]} `
    }
}

console.log(sentence)
//let number = 3


//if(  7 % number === 1 ){
  //  console.log("Correct!!!!!!!!")
//}


const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

for(let i = 0; i < 4; i++){
    let string = `${beatles.members[i].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[i].birth}. He contributed heavily to the ${beatles.albums[i]} album.`
    if(beatles.members[i].death){
        string += ` They died in ${beatles.members[i].death}`
    }
    console.log(string)
}