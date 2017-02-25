+"# Javascript practice // Code goes here practice
 
// js
// It should have a function to display todos.
// It should have a function to add todos.
// It should have a function to change todos.
// It should have a function to delete todos.
 var todoList = {
     todos: ['item 1', 'item 2', 'item 3'],
     displayTodos: function() {
         console.log('My Todos', this.todos);
     },
     addTodo: function(todo) {
         this.todos.push(todo);
         this.displayTodos();
     },
     changeTodo: function(position, newValue) {
         this.todos[position] = newValue;
         this.displayTodos();
     },
     deleteTodo: funciton(position) {
         this.todos.splice(position, 1);
         this.displayTodos();
     }
     };
 