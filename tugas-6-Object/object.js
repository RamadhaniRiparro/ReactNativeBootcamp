console.log("=== Soal No 1 ===")

arrayToObject = (arr) => {
    if (arr.length <= 0) {
        return console.log("")
    }
    for (let i = 0; i < arr.length; i++) {
        let newObject = {}
        let birthYear = arr[i][3];
        let now = new Date().getFullYear()
        let newAge;
        if (birthYear && now - birthYear > 0) {
            newAge = now - birthYear
        } else {
            newAge = "invalid Birth Year"
        }
        newObject.firstName = arr[i][0]
        newObject.lastName = arr [i][1]
        newObject.gender = arr[i][1]
        newObject.age = newAge

        let consoleText = (i + 1) + " . " + newObject.firstName + "" + newObject.lastName + ":"
        console.log(consoleText);
        console.log(newObject);
    }
}
    

let people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ];
arrayToObject(people)

console.log("=== Soal No 2 ===")

shoppingTime = (memberId, money) => {
    if (!memberID) {
       return "Mohon maaf, toko X hanya berlaku untuk member saja"
    } else if {
        return "Mohon maaf, uang tidak cukup"
    } else {
        let newObject = {}
        let moneychange = money;
        let purchaseList = []
        
        
    }
}