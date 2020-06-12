import { red, blue } from './button-styles'


export const top = document.createElement('div');
top.innerText = 'Top of footer';
top.style = red;
export const bottom = document.createElement('div');
bottom.innerText = 'Bottom of footer';
bottom.style = blue;

export const footer = document.createElement('footer');
footer.appendChild(top);
footer.appendChild(bottom);