class User {
    constructor(name, email) {
      this.payment_history = new Array(); //an array of transactions
      this.name = name;
      //this.id = id;
      this.email = email;
      this.team = null;
    }
    // Getters
    get name() {
      return this.name;
    }
    get team() {
        return this.team;
    }
    get team_members() {
        return this.team.getMembers();
    }

    //Setters
    set name(name) {
        this.name = name;
    }
    set team(team) {
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

    }
    owed(){
        
    }
   
    
  }