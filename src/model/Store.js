export default class Store {
  constructor() {
    this.todoList = [];
  }

  addTodo(text) {
    this.todoList.push({ id: this.todoList.length + 1, text, checked: false });
  }

  checkTodo(id) {
    this.todoList.map((todo) => {
      if (todo.id === Number(id)) {
        todo.checked = !todo.checked;
      }
      return todo;
    });
  }

  removeTodo(id) {
    this.todoList = this.todoList.filter((todo) => Number(id) !== todo.id);
  }
}
