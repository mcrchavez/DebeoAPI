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