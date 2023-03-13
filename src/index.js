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
raph = new User("raph", "raph@turtles.com", turtleTeam);
turtleTeam.add_user()