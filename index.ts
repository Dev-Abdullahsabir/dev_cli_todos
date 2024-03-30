#! /usr/bin/env node
import inquirer from "inquirer";

let todos = [];
let condition = true;

while(condition){
    let addTask = await inquirer.prompt([
        {
            name: `todo`,
            type: `input`,
            message: `What you want to add in your todos`,
        },
        {
            name:`addMore`,
            type:`confirm`,
            message:`Do you want to add more?`,
            default:`false`,
        },
        {
            name:`delete`,
            type:`confirm`,
            message:`Do you want to delete the last one?`,
            default:`false`,
        },
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    if (addTask.delete) {
        todos.pop();
    }
}
console.log(todos);