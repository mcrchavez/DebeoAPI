//Global variable for the collection of teams
const Teams = new Array();

// function to create a two dimensional array
function make2DArray(a, b) {
    let arr = [];
    // create empty two dimensional array
    for (let i = 0; i< a; i++) {
        for(let j = 0; j< b; j++) {
            arr[i] = [];
        }
    }
    return arr;
}
turtleTeam = new Team("turtles", 0123);
console.log("Turtles before adding any users: " + turtleTeam.toString());
raph = new User("raph", "raph@turtles.com", turtleTeam);
console.log("User Raph: " + raph.toString());
turtleTeam.add_user(raph);
console.log("Turtles after adding Raph: " + turtleTeam.toString());
turtleTeam.add_user(new User("Donny", "donny@turtles.com", turtleTeam));
turtleTeam.add_user(new User("Mikey", "mikey@turtles.com", turtleTeam));
turtleTeam.add_user(new User("Leo", "leo@turtles.com", turtleTeam));
console.log("Turtles after adding four members: " + turtleTeam.toString());