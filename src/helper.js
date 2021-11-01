export function qs(selector, scope = document) {
  if (!selector) throw Error("No Selector");
  return scope.querySelector(selector);
}
