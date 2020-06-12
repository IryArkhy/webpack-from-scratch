import { red, blue } from './button-styles'
import './css/footer.css'; //this is a side effect (side-effecty import). You don't wanna do this usually but with css you can get away with it.

export const top = document.createElement('div');
top.innerText = 'Top of footer';
top.style = red;
export const bottom = document.createElement('div');
bottom.innerText = 'Bottom of footer';
bottom.style = blue;

export const footer = document.createElement('footer');
footer.appendChild(top);
footer.appendChild(bottom);