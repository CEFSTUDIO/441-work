/*
HW-4; part 2
SHELL VARIABLE PRINTING

Directions: Write an application that can parse input variables supplied with the node call and print these to the console.
This app should be capable of discarding flags (i.e. `-f` and/or `--flag`) and only printing the proceeding variables, each on their own line.

Furthermore, your app should be looking for a "message" flag signified by "`-m`".
The value following this flag should be printed last,
regardless of where it comes in the input variable sequence and should have a blank line above it.

When I test this app, I will include a number of values proceeded by flags (i.e. `--flag "some value"`).
*/

// Start code below this line

//Function to grab flag
function grab(flag){
  // Look for the relevant index
  var index = process.argv.indexOf(flag);
  // Testing the index value- if it returns -1, null is returned. Otherwise, it will return the next item.
  return (index === -1) ? null : process.argv[++index];
}

// Creating flags
  // catching "flag"
  var flag = grab('-f');

  // catching the other flag.
  var flag2 = grab('--flag')

  // creating the special -m flag.
  var message = grab('-m');

// for space
console.log('\n')

// Prints the information to console.
if(!flag){
// do nothing if not present.
}else{
  console.log(`${flag}`);
}

if(!flag2){
// do nothing if not present
}else{
  console.log(`${flag2}`);
}

if(!message){
// do nothing if not present
}else{
  console.log(`\n${message}`)
}

/*
To run the app- follow this format roughly-
$ node 02_shell_var_printing.js -f "thing here" -m "message here" --flag "ha"
*/
