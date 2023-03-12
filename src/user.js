class User {
    constructor(name, team) {
      this.payment_history = null;
      this.name = name;
      this.team = team;
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

    }
    set team(team) {

    }

    // Methods
    join_team(team_id) {
      
    }
    leave_team(team_id) {
      
    }
    //updates individual and group history accordingly
    add_transaction(transaction) {
      
    }
    toOwe(){

    }
    owed(){
        
    }
   
    
  }