function add_transaction(t, list){ 
    let flen = list.length;
    list.push(t);
    console.log(list);
    if(flen = list.length - 1){
        return true;
    }
    else{
        return false;
    }
}
module.exports = add_transaction;