class PaymentHistory{
    constructor(is_debt, transaction_id) {
        this.is_debt = is_debt; // boolean
        this.transaction_id = transaction_id; // int
        var transactions = new Array(); // Transaction
    }

    // Methods
    addTransaction(transaction) {
        t = Transaction(transaction_id);
        transactions.push(t);
    }

    removeTransaction(transaction_id) {
        transactions.splice(transactions.indexOf(tranasaction_id), 1);
    }

    findTransaction(transaction_id) {
        return transactions.at(transaction_id);
    }

}