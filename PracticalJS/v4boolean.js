// V4 Requirements
//todoList.addTodo should add objects
//todList.changeTodo should change the todo Text property
//todoList.toggleCompleted should change the completed property
//Boolean value
var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos', this.todos);
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: funciton(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};