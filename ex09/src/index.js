// Only change code below this line

// users nested array with four objects starts here
var users = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        age: 24,
        gender: "male"
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        age: 5,
        gender: "female"
    },
    {
        id: 3,
        firstName: "Jim",
        lastName: "Carrey",
        age: 54,
        gender: "male"
    },
    {
        id: 4,
        firstName: "Kate",
        lastName: "Winslet",
        age: 40,
        gender: "female"
    }
];
// users nested array with four objects ends here
// getUsers function - list of users starts here
function getUsers() {
    var output = "";
    users.forEach(user => {
        output += `${user.id} - ${user.firstName} ${user.lastName} is ${user.age}, ${user.gender}\n`;
       
    });
    console.log(output);
        return output;
}
// getUsers function - list of users ends here
// findUserById(id) function starts here
function findUserById(id) {
    var user = users.find(u => u.id === id);
    try {
        if (user) {
            var iFindUser = `${user.id} - ${user.firstName} ${user.lastName} is ${user.age}, ${user.gender}`;
        }
        else {
            throw "Cannot read property 'id'";
        }
    } catch (error) {
        console.log(error);
        return error;
    }
    console.log(iFindUser);
    return iFindUser;
}
// findUserById(id) function ends here
// Only change code above this line
getUsers();
findUserById(1); // Change this line
findUserById(0); // Change this line
findUserById(5); // Change this line
findUserById(4); // Change this line
module.exports = findUserById;
