import nav from "./nav";
import { footer } from "./footer";
import makeButton from "./button";
import { red, makeColor } from "./button-styles";

const button = makeButton('Yay a button!!!!');
button.style = makeColor("cyan");
document.body.appendChild(button);
document.body.appendChild(footer);