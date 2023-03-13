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
        this.name = name;
    }
    set team(team) {
        this.team = team;
    }

    // Methods
    join_team(team_id) {//needs additional checking
      if(Teams.has(team_id) == false){
        return false;
      }
      else{
        
      }

    }
    leave_team(team_id) {
        if(Teams.has(team_id) == false){
          return false;
        }else{
          
        }      
    }
    //updates individual and group history accordingly
    add_transaction(transaction) {
      
    }
    toOwe(){

    }
    owed(){
        
    }
   
    
  }