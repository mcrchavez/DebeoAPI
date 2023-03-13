class Team{
    constructor(name, id) {
        this.members = new Map(); //Our collection of users
        this.name = name;      // name of the team.
        this.id = id;
        this.admin = null;

    }

    set_admin(user){
        this.admin = user;
    }

    get_admin(){
        return admin
    }

    add_user(user){
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