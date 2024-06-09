// processes Argv = bisa mengambil input start terminal
// command : read, add, deleta, update
const command = process.argv[2];
const parant = process.argv.slice(3);
const controller = require('./controller/controller_todo')


switch (command){
   case 'read':
    // console.log ("command read");
    // const fs = require ('fs');
    // let data = fs.readFileSync('./data.json','utf8');
    // let todos = JSON.parse(data);
    // console.log(todos);
    // console.log(controller);
    controller.read();
    break;
case 'add':
    // console.log ("command add");
    controller.add(parant);
    break;
case 'delete':
    // console.log ("command delete");
    controller.delete(parant);
    break;
case 'update':
    // console.log ("command update");
    controller.update(parant);
    break;
default:
    // console.log ("masukan koment yang benar");
    controller.messege("masukan koment yang benar")
    break;
}