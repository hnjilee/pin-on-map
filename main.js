'use strict';

const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const pin = document.querySelector('.pin');
const coordinates = document.querySelector('.coordinates');

window.addEventListener('load', () => {
  const x = parseInt(document.documentElement.clientWidth / 2);
  const y = parseInt(document.documentElement.clientHeight / 2);
  coordinates.textContent = `(${x}px, ${y}px)`;
});

window.addEventListener('mousemove', e => {
  const x = e.clientX;
  const y = e.clientY;

  horizontal.style.top = `${y}px`;
  vertical.style.left = `${x}px`;
  pin.style.top = `${y}px`;
  pin.style.left = `${x}px`;
  coordinates.style.top = `${y}px`;
  coordinates.style.left = `${x}px`;
  coordinates.textContent = `(${x}px, ${y}px)`;
});

window.addEventListener('click', e => {
  const x = e.clientX;
  const y = e.clientY;

  const pin = document.createElement('img');
  pin.setAttribute('src', 'images/pin.png');
  pin.setAttribute('class', 'pin');
  pin.style.top = `${y}px`;
  pin.style.left = `${x}px`;

  const coordinates = document.createElement('span');
  coordinates.setAttribute('class', 'coordinates');
  coordinates.style.top = `${y}px`;
  coordinates.style.left = `${x}px`;
  coordinates.textContent = `(${x}px, ${y}px)`;

  document.body.append(pin, coordinates);
});
