const { createTestScheduler } = require("jest");

class Transaction{
    static transaction_counter = 0;

    constructor(transaction_id, total, debt, date, paid_off){
        transaction_counter = transaction_counter + 1;//increment counter
        var transaction_id = transaction_counter;
        this.total = total;
        var debt = make2DArray(0, 0);//debt matrix (to be updated)
        var date = date;
        this.paid_off = paid_off;
    }

    get transaction_id(){
        return this.transaction_id;//return current transaction id
    }
    get debt(){
        return this.debt;
    }

    set debt(debt_array){
        this.debt = debt_array;
    }
    set paid_off(paid_off){
        this.paid_off = paid_off;
    }

    set_debt(userA, userB){

    }

    split_debt(user_collection, debt){

    }

}