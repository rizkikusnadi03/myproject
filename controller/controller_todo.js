const model = require ('../model/model');
const todo_view = require ('../view/todo_view');

class controller {
    static read (){
         //console.log("Controller read");
        let todos = model.read();
        todo_view.read(todos);
    }
    static add(todos){

    }static update(todos){

    }
    static delete(todos){

    }
    static messege(msg){
        todo_view.messege(msg);
    }
}

module.exports = controller;