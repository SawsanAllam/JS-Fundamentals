const args = process.argv.slice(2).join(' ');
function msgArgs(argString) {
  if (argString.length === 0) {
    console.log("No argument");
  } else if (argString.split(' ').length === 1) {
    console.log("Argument found");
  } else {
    console.log("Arguments found");
  }
}
msgArgs(args);
