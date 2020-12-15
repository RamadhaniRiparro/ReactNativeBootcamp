console.log("===== 1. Mengubah fungsi menjadi fungsi arrow =====");

var golden = () => console.log("this is golden!!");
golden()


console.log("===== 2. Sederhanakan menjadi Object literal di ES6 =====");

const newFunction = function literal(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName,
      fullName: function(){
        console.log(firstName + " " + lastName)
        return 
      }
    }
  }
   
  //Driver Code 
  newFunction("William", "Imoh").fullName()

  const fullName = 'John Doe'
 
const john = {
  fullName: fullName
}

const fullName1 = 'John Doe'
 
const johny = {fullName1}

console.log("===== 3. Destructuring =====");

let newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  };

const { firstName, lastName, destination, occupation } = newObject;

console.log(firstName + ',' + lastName + ',' + destination + ',' + occupation);

console.log("===== 4. Array Spreading =====");

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined =  [...west, .....east]
//Driver Code
console.log(combined)


console.log("===== 5. Template Literals =====");
const planet = "earth"
const view = "glass"
var before = `Lorem ${view} dolor sit amet consectetur adipiscing elit ${planet} 
do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
ad minim veniam`
 
// Driver Code
console.log(before)