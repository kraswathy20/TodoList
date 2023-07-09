let input = prompt("What would you like to do?");
const todo =[]
while(input){
    if(input === "quit" || input === 'q'){
        console.log("Ok, You Quit the App!");
        break;
    }
    else if(input === "new"){
        let len = todo.length
        for(i=len;input=="new";todo[i++])
        {
         todo.push(prompt("Enter the new Todo:"));
            console.log(`${todo[i]} added to the list`);
            input = prompt("What would you like to do?");
        } 
        // const newtodo = prompt("Enter the new Todo:");
        // todo.push(newtodo);
        // console.log(`${newtodo} added to the List`);
    }
    else if(input === "list"){
        console.log("* * * * * * * * * * * *");
        for(let i=0;i<todo.length;i++){
            // console.log(`${i} : ${todo[i]}`);
            let item = todo[i];
            let index = todo.indexOf(item);
            console.log(`${index} : ${item}`);
        }
        console.log("* * * * * * * * * * * *");
        input = prompt("What would you like to do?");
    }
    else if(input === "delete"){
        let del = parseInt(prompt("Enter the index of the Todo to be deleted:"));
        if(!Number.isNaN(del)){
        console.log(`${todo[del]} is removed`);
        todo.splice(del,1);
        input = prompt("What would you like to do?");
        }
    }
    else{
        console.log("Invalid Entry,Try Again!!");
        input = prompt("What would you like to do?");
    }
}