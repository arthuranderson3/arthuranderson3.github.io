import './css/style.css';

async function getComponent() {

  const element = document.createElement('div');
  const { default: _ } = await import('lodash');

  const btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
