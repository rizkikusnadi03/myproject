const model = require ('../model/model');
const todo_view = require ('../view/todo_view');

class controller {
    static read (){
        console.log("Controller read");
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