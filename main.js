'use strict';

const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const pin = document.querySelector('.pin');
const coordinates = document.querySelector('.coordinates');

addEventListener('load', () => {
  const centerX = parseInt(window.innerWidth / 2);
  const centerY = parseInt(window.innerHeight / 2);
  update(centerX, centerY);
});

addEventListener('mousemove', e => {
  const x = parseInt(e.clientX);
  const y = parseInt(e.clientY);
  update(x, y);
});

addEventListener('click', e => {
  const x = parseInt(e.clientX);
  const y = parseInt(e.clientY);
  fix(x, y);
});

function update(x, y) {
  horizontal.style.top = `${y}px`;
  vertical.style.left = `${x}px`;
  pin.style.top = `${y}px`;
  pin.style.left = `${x}px`;
  coordinates.style.top = `${y}px`;
  coordinates.style.left = `${x}px`;
  coordinates.textContent = `(${x}, ${y})`;
}

function fix(x, y) {
  const pin = document.createElement('img');
  pin.setAttribute('src', 'images/pin.png');
  pin.classList.add('pin');
  pin.style.top = `${y}px`;
  pin.style.left = `${x}px`;

  const coordinates = document.createElement('span');
  coordinates.classList.add('coordinates');
  coordinates.style.top = `${y}px`;
  coordinates.style.left = `${x}px`;
  coordinates.textContent = `(${x}, ${y})`;

  document.body.append(pin, coordinates);
}
