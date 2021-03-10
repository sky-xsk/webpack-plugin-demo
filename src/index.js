// 实践
async function getComponent() {
  const { default: _ } = await import('lodash');
  element.innerHTML = _.join(['xsk', 'webpack'], ' ');
  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});