/*
HW-4; part 3
INTERACTIVE FIBONACCI PRINTING
*/

// Start code below this line

// Imported readline
var readline = require('readline');

// Readline will now control the process
var rl = readline.createInterface(process.stdin, process.stdout);
// holds values for later use
var holder = {
num: '',
answer: ''
};

// The Fibonacci Algorithm Function
function fib(num) {
  if (num === 0) {
    holder.answer = 0;
      return holder.answer;
  } else if (num === 1) {
    holder.answer = 1;
      return holder.answer;
  } else {
    holder.answer = fib(num - 1) + fib(num - 2);
      return holder.answer;
  }
}

// function for if statement
f = function(num){

 //sets holder.num to num.
 holder.num = num;

   // Checks to make sure the number isn't 80 or higher.
   if (holder.num >= 80){
     console.log("Number too large! Try something below 80.")
     rl.question("Please Enter another to compute or 'exit'...", f);
     return;
   }

   // Exit Function
   if (holder.num.toLowerCase().trim() === 'exit') {
     rl.close();
   } else {
     fib(parseInt(num.trim()));
     console.log(`Fib ${holder.num} => ${holder.answer}`);
     rl.question("Please Enter another to compute or 'exit'...", f);
   }
}
// asks question
rl.question("Please Enter a Fibonacci number to compute...", f);

// Exits
rl.on('close', function(){
   process.exit();
});
