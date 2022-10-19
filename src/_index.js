// Подключение картинки
import Icon from './phone.png';
import json from './json.json';

// подключение стилей
import './style.scss';

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello Webpack 5';
  element.classList.add('hello');
  // Пример использования картинки
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  return element;
}

console.log(json.data.test);

document.body.append(component());