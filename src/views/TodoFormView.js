import { qs } from "../helper.js";
import View from "./View.js";

export default class TodoFormView extends View {
  constructor() {
    super(qs("#todo-form"));
    this.inputElement = qs("input[name=add-todo]");
    this.bindEvents();
  }

  bindEvents() {
    this.on("submit", (event) => this.handleSubmit(event));
  }

  handleSubmit(event) {
    event.preventDefault();
    const { value } = this.inputElement;

    if (value.length > 0) {
      this.emit("@submit", { value });
      this.resetInputValue();
    }
  }

  resetInputValue() {
    this.inputElement.value = "";
  }
}
