let rootNode = document.getElementById('root');

class TodoForm{
    constructor(formId){
        this.form = () => rootNode.querySelector(formId);
        this.input = () => this.form().querySelector('.task-inp');
        this.addBtn = () => this.form().querySelector('.add-btn');
    }
}

let ourForm = new TodoForm('#add-form');
let ourForm2 = new TodoForm('#add-form2');

console.log(ourForm.input());
console.log(ourForm2.addBtn());

