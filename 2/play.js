const person = {
    name: "Max",
    age: 29,
    greet() {
        console.log("Hi" + this.name)
    }
}

let calculator = {
    a: 0,
    b: 0,
    sum() {
        return this.a + this.b
    },
    subtract() {
        return this.a - this.b
    }
}

let calcObj = calculator
calcObj.a = 1
calcObj.b = 3
let sumVal = calculator.sum()
console.log(sumVal)

//person.greet()
//console.log(person)

// const hobbies = ['Sports', 'Cooking']

// for (let hobby of hobbies) {
//     console.log(hobby)
// }

// hobbies.map(hobby => {
//     return 'Hobby' + hobby
// })

// hobbies.push('Programming')
// // const copiedArray = [hobbies]
// const copiedArray = [...hobbies]
// //const copiedArray = hobbies.slice()
// console.log(copiedArray)