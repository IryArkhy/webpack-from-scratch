const red = 'color:red;';
const blue = 'color:blue;';
const makeColorStyle = color => `color: ${color};`

//Named export with CommonJS
exports.red = red;
exports.blue = blue;
exports.makeColor = makeColorStyle;