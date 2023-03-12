class Item {
    #price;
    constructor(name, desc, price){
        this.name = name;
        this.desc = desc;
        this.price = price;
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


}