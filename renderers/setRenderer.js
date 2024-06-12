export let renderAfterChange = () => {};

export function setRenderer(cb) {
  renderAfterChange = cb;
}