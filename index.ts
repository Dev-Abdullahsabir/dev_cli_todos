#! /usr/bin/env node
import inquirer from "inquirer";

let todos = [];
let condition = true;

while(condition){
    let addTask = await inquirer.prompt([
    {
        name:`todos`,
        type:`input`,
        message:`What do you want to add in Todos?`,
    },
    {
        name:`addMore`,
        type:`confirm`,
        message:`Do you want to add more?`,
        default:true,
    },
    {
        name:`delete`,
        type:`confirm`,
        message:`Do you want to delete the last one?`,
        default:true,
    },
]);
todos.push(addTask.todos);
if(addTask.delete){
    todos.pop();
}
console.log(todos);
}