import { qs } from "../helper.js";
import View from "./View.js";

export default class TodoListView extends View {
  constructor() {
    super(qs("#todo-list"));
    this.template = new Template();
  }

  show(todoList = []) {
    if (todoList.length === 0) {
      this.element.innerHTML = this.template.getEmptyMessage();
    } else {
      const items = this.template.getTodoList(todoList);
      this.element.innerHTML = items;
    }
  }
}

class Template {
  getEmptyMessage() {
    return `
        <div class='empty-message'>Add your Todo!</div>
        `;
  }

  getTodoList(data = []) {
    return `
      ${data
        .map(({ id, text }) => `<li class='todo' data-id=${id}>${text}</li>`)
        .join("")}
      `;
  }
}
