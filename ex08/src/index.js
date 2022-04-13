// Only change code below this line
// users nested array with four objects starts here
var users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 24,
        gender: "male"
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 5,
        gender: "female"
    },
    {
        firstName: "Jim",
        lastName: "Carrey",
        age: 54,
        gender: "male"
    },
    {
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
        output += user.firstName + " " + user.lastName + " is " + user.age + ", " + user.gender + "\n";   
    });
    console.log(output);
    return output;
}
// getUsers function - list of users ends here
// findUser(lastName, gender) function starts here
function findUser(lastName, gender) {
    try {
        var user = users.find(u => u.lastName === lastName && u.gender === gender);
        if (user) {
            var iFindUser = user.firstName + " " + user.lastName + " is " + user.age + ", " + user.gender;   
        }
        else {
            throw "Cannot read property 'firstName' of undefined";
        }
    } catch (err) {
        console.log(err);
        return err;
    }
    console.log(iFindUser);
    return iFindUser;
}
// findUser(lastName, gender) function ends here

// Only change code above this line
getUsers();
findUser("Jane", "male"); // Change this line
findUser("Doe", "male"); // Change this line
findUser("Doe", "female"); // Change this line
findUser("Carrey", "male"); // Change this line
findUser("Winslet", "male"); // Change this line 
module.exports = findUser;
