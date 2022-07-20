'use strict';

const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const pin = document.querySelector('.pin');
const coordinates = document.querySelector('.coordinates');

addEventListener('mousemove', e => {
  const x = e.clientX;
  const y = e.clientY;
  update(x, y);
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
