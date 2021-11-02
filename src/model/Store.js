export default class Store {
  constructor() {
    this.todoList = [];
  }

  addTodo(text) {
    this.todoList.push({ id: this.todoList.length + 1, text });
  }
}
