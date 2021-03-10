// 实践
import _ from 'lodash';

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['xsk', 'webpack-plugin-demo'], ' ');
  return element;
}

document.body.appendChild(component());