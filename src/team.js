class Team{
    constructor(name, email) {
        this.members = new Map(); //Our collection of users
        this.name = name;      // name of the team.
        this.email = email;
        this.admin = null;

    }

    set_admin(user){
        this.admin = user;
    }

    get_admin(){
        return admin
    }
    
    add_user(email,user){
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
}