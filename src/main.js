import Controller from "./controller/Controller.js";
import Store from "./model/Store.js";

document.addEventListener("DOMContentLoaded", main);

function main() {
  const store = new Store();

  const views = {};

  new Controller(store, views);
}
