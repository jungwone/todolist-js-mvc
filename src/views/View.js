export default class View {
  constructor(element) {
    if (!element) throw Error("No element");

    this.element = element;
    this.originDisplay = element.style.display || "";

    return this;
  }

  hide() {
    this.element.display = "none";
    return this;
  }

  show() {
    this.element.display = this.originDisplay;
    return this;
  }

  on(eventName, eventHandler) {
    this.element.addEventListener(eventName, eventHandler);
  }

  emit(eventName, detail) {
    const event = new CustomEvent(eventName, { detail });
    this.element.dispatchEvent(event);
    return this;
  }
}
