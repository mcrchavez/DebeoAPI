class User {
    constructor(name, email) {
      this.payment_history = new Array();
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