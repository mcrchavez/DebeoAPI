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
class User {
    constructor(name, email, team) {
      this.payment_history = new Array();//past transactions stored as array //an array of transactions
      this.name = name;
      //this.id = id;
      this.email = email;
      this.team = null;
    }
    // Getters
    get_name() {
      return this.name;
    }
    get_team() {
        return this.team;
    }

    get id(){
        return this.id;
    }

    get_team_members() {
        return this.team.getMembers();
    }
    get_email() {
      return this.email;
  }

    //Setters
    set_name(name) {
        this.name = name;
    }
    set_team(team) {
        this.team = team;
    }

    // Methods
    join_team(team_id) {//needs additional checking
        if(Teams.at(team_id) === undefined){
            return false;
          }
        else{
            hold = Teams.at(team_id);
            this.id = hold.length + 1;
            hold.add_user(this);
            return true;
          }      

    }
    leave_team(team_id) {
        if(Teams.at(team_id) === undefined){
            return false;
          }
        else{
            hold = Teams.at(team_id);
            hold.remove_member(this.id);
            return true;
          }      
    }
    //updates individual and group history accordingly
    add_transaction(transaction) {
      this.payment_history.push(transaction);
    }
    toOwe(){
        //sum how much user owes others
    }
    owed(){
        //sum how much user is owed by others
    }
    toString(){
        return "["+ this.name + " : " + this.email+ "]"; 
    }
    
  }

class Admin extends User{
    add_member (user){

    }
    remove_member (member_id){

    }
    //override
    leave_team(team_id){

    }
}

class Item {
    constructor(name, desc, price){
        this.name = name;
        this.desc = desc;
        var price = price;
        this.assignedTo_list = [];
    }

    get name() {
        return this.name;
    }

    get desc(){
        return this.desc;
    }

    get price(){
        return this.price;
    }

    set name(name){
        this.name = name;
    }

    set desc(desc){
        this.desc = desc;

    }

    set price(price){
        this.price = price;

    }

    assign_To(assignedTo_list){
        this.assignedTo_list = assignedTo_list;
    }
}
class PaymentHistory{
    constructor(is_debt, transaction_id) {
        this.is_debt = is_debt; // boolean
        this.transaction_id = transaction_id; // int
        var transactions = new Array(); // Transaction
    }

    // Methods
    addTransaction(transaction) {
        t = Transaction(transaction_id);
        transactions.push(t);
    }

    removeTransaction(transaction_id) {
        transactions.splice(transactions.indexOf(tranasaction_id), 1);
    }

    findTransaction(transaction_id) {
        return transactions.at(transaction_id);
    }

}

class Team{
    constructor(name, id) {
        this.members = new Map(); //Our collection of users
        this.name = name;      // name of the team.
        this.id = id;// team id
        this.admin = null; //current team admin
        this.count = 0; //number of members

    }

    set_admin(user){
        this.admin = user;//set admin
    }

    get_admin(){
        return admin;//return current admin
    }

    add_user(user){
        if(this.count == 0){//if first member, make admin
            this.set_admin(user);
        }
        this.count += 1;
        return this.members.set(user.get_email(), user);
    }

    get_user(email){
        return this.members.get(email);
    }

    get_members(){
        return this.members;
    }

    has_user(email){
        return this.members.has(user)
    }

    toString(){
        var str = "";
        str += "\nTeam Name: " + this.name + "\n";
        for (let [key, value] of this.members){
            if(value == this.admin){
                str += "Admin: " + value + "\n";
            }
            else{
                str += "Member: " + value + "\n";
            }
        }
        return str;
    }
}


const { createTestScheduler } = require("jest");

class Transaction{
    static transaction_counter = 0;

    constructor(transaction_id, total, debt, date, paid_off){
        transaction_counter = transaction_counter + 1;//increment counter
        var transaction_id = transaction_counter;
        this.total = total;
        var debt = make2DArray(0, 0);//debt matrix (to be updated)
        var date = date;
        this.paid_off = paid_off;
    }

    get transaction_id(){
        return this.transaction_id;//return current transaction id
    }
    get debt(){
        return this.debt;
    }

    set debt(debt_array){
        this.debt = debt_array;
    }
    set paid_off(paid_off){
        this.paid_off = paid_off;
    }

    set_debt(userA, userB){

    }

    split_debt(user_collection, debt){

    }

}
var turtleTeam = new Team("turtles", 0123);
console.log("Turtles before adding any users: " + turtleTeam.toString());

raph = new User("raph", "raph@turtles.com", turtleTeam);
console.log("User Raph: " + raph.toString());
turtleTeam.add_user(raph);
console.log("Turtles after adding Raph: " + turtleTeam.toString());

turtleTeam.add_user(new User("Donny", "donny@turtles.com", turtleTeam));
turtleTeam.add_user(new User("Mikey", "mikey@turtles.com", turtleTeam));
turtleTeam.add_user(new User("Leo", "leo@turtles.com", turtleTeam));
console.log("Turtles after adding four members: " + turtleTeam.toString());