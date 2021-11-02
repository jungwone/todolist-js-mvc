export default class Controller {
  constructor(store, views) {
    this.store = store;
    const { todoFormView, todoListView } = views;

    this.todoFormView = todoFormView;
    this.todoListView = todoListView;

    this.subscribeViewEvents();
    this.render();
  }

  subscribeViewEvents() {
    this.todoFormView.on("@submit", (event) =>
      this.addTodo(event.detail.value)
    );
  }

  addTodo(text) {
    this.store.addTodo(text);
    this.render();
  }

  render() {
    this.todoListView.show(this.store.todoList);
  }
}
