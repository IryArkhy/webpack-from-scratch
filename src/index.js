import nav from "./nav";
import { footer } from "./footer";
import makeButton from "./button";
import { red, makeColor } from "./button-styles";
import makeImage from "./image";
import Foo from './foo.ts';
import imageURL from './cat.jpeg';
import './css/footer.css';

const button = makeButton('Yay a button!!!!');
button.style = makeColor("cyan");
document.body.appendChild(button);
document.body.appendChild(footer);

const image = makeImage(imageURL);
document.body.appendChild(image);