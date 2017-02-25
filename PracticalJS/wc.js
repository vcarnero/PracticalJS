+"# Javascript practice // Code goes here practice
 
  // js
 // It should have a function to display todos.
 var todoList = {
     todos: ['item 1', 'item 2', 'item 3'],
     displayTodos: function() {
         console.log('My Todos', this.todos);
     },// It should have a function to add todos.
     addTodo: function(todo) {
         this.todos.push(todo);
         this.displayTodos();
     },// It should have a function to change todos.
     changeTodo: function(position, newValue) {
         this.todos[position] = newValue;
         this.displayTodos();
     },// It should have a function to delete todos.
     deleteTodo: funciton(position) {
         this.todos.splice(position, 1);
         this.displayTodos();
     }
     };
 