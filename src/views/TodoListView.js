import { qs } from "../helper.js";
import View from "./View.js";

export default class TodoListView extends View {
  constructor() {
    super(qs("#todo-list"));
    this.template = new Template();
    this.bindEvents();
  }

  bindEvents() {
    this.on("click", (event) => this.handleClick(event));
  }

  handleClick(event) {
    const target = event.target;

    if (target.id === "todo-check") {
      this.emit("@check", { value: target.parentNode.dataset.id });
      return;
    }

    if (target.id === "todo-remove") {
      this.emit("@remove", { value: target.parentNode.dataset.id });
    }
  }

  show(todoList = []) {
    if (todoList.length === 0) {
      this.element.innerHTML = this.template.getEmptyMessage();
    } else {
      const items = this.template.getTodoList(todoList);
      this.element.innerHTML = items;
    }

    super.show();
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
        .map(
          ({ id, text, checked }) => `
          <li class='todo' data-id=${id}>
            <button id='todo-check'>${checked ? "✔" : ""}</button>
            <span class='text'>${text}</span>
            <button id='todo-remove' class='remove'>X</button>
          </li>
        `
        )
        .join("")}
      `;
  }
}

// U+2714
