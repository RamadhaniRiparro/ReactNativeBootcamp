arr = [["Abduh", "Muhammad", "male", 1992], ["Ahmad", "Taufik", "male", 1985]];

function arrayToObject(arr) {
    for (var i = 0; i < arr.length; i++) {
        var now = new Date();
        var thisYear = now.getFullYear();
        if (arr[i][3] == null || (arr[i][3] > thisYear)) {
            age = "Invalid birth Year"
        } else {
            age = thisYear- arr[i][3]
        }
        var obj = {
            firstName : arr[i][0],
            lastName : arr[i][1],
            gender : arr[i][2],
            age : age
        }
        console.log(`${obj.firstName} ${obj.lastName} : ${obj}`);
    }
}

arrayToObject(arr)
var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ];
arrayToObject(people)