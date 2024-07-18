const fs = reuquire ('fs');
class model {
    static getTodos(){
        let data = fs.readFileSync('./data.json','utf8');
        let todos = JSON.parse(data);
        return todos 
    }
    static show(){
        let todos=this.getTodos();
        return todos;
    }
}


module.exports = model;