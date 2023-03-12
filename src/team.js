class Team{
    constructor(name) {
        this.members = new Set(); //Our collection of users
        this.name = name;      // name of the team.
    }

    add_user(user){
        return this.members.add(user);
    }

    get_user(user){
        return this.members.get(user);
    }

    get_members(){
        return this.members;
    }
}