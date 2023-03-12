// import the readline module for work with stdin, or stdout.
const readline = require('readline');
  
// create a readline object to work with the stream.
// pass the stdin, or stdout in the current process.
const prompts = readline.createInterface(process.stdin, process.stdout);
  
// create a question or there handler.
prompts.question('Enter userInput here : ', (response) => {
  
    // check the response.
    if(response.toLocaleLowerCase() == 'debeo') {
        console.log("YUHHH debeo!!");
    }else {
        console.log("try again");
    }
  
    // after the all work is done want to terminate this process.
    process.exit();
});