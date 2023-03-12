class Transaction{
    static transaction_counter = 0;

    constructor(transaction_id, total, debt, date, paid_off){
        transaction_counter = transaction_counter + 1;
        var transaction_id = transaction_counter;
        this.total = total;
        var debt = debt;
        var date = date;
        this.paid_off = paid_off;
    }

    get transaction_id(){
        return this.transaction_id;
    }
    get debt(){
        return this.debt;
    }

    set debt(debt_array){
        this.debt = debt_array;
    }

}