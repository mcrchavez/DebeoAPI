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
        return this.members.add(user);
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
        
    }
}