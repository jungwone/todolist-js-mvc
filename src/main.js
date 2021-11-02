import Controller from "./controller/Controller.js";
import Store from "./model/Store.js";
import TodoFormView from "./views/TodoFormView.js";
import TodoListView from "./views/TodoListView.js";

document.addEventListener("DOMContentLoaded", main);

function main() {
  const store = new Store();

  const views = {
    todoFormView: new TodoFormView(),
    todoListView: new TodoListView(),
  };

  new Controller(store, views);
}
