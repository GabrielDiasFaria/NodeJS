const name = 'Max'
let age = 29
const hasHobbies = true

function summarizeUser(userName, userAge, userHasHobby) {
    return (
        'Name is ' + userName +
        ', age is ' + userAge +
        ' and hobbies ' + userHasHobby
    )
}

const printScreen = (param) => {
    console.log(param)
}
// const printScreen = (param) => console.log(param)
// const printScreen = param => console.log(param)

printScreen("A")

console.log(summarizeUser("A", 29, true))