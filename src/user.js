class User {
    constructor(name, email, team) {
      this.payment_history = new Array();//past transactions stored as array //an array of transactions
      this.name = name;
      this.email = email;
      this.team = team;//team user is a part of (can't be standalone)
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
    join_team(team_id) {
        if(Teams.at(team_id) === undefined){//checks if team exists in global teams array
            return false;//returns false if it doesn't exist
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