const args = process.argv.slice(2).join(' ');
function msgArgs(args){
    if(args.length===0){
        console.log("No argument");
        
    }else if(args.length===1){
        console.log("Argument found");
    }else {
        console.log("Arguments found");
        
    }
}
msgArgs(args);
