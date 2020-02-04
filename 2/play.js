const person = {
    name: "Max",
    age: 29,
    greet() {
        console.log("Hi" + this.name)
    }
}

//person.greet()
//console.log(person)

const hobbies = ['Sports', 'Cooking']

// for (let hobby of hobbies) {
//     console.log(hobby)
// }

// hobbies.map(hobby => {
//     return 'Hobby' + hobby
// })

hobbies.push('Programming')
// const copiedArray = [hobbies]
const copiedArray = [...hobbies]
//const copiedArray = hobbies.slice()
console.log(copiedArray)