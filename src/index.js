// // import BaseButton from './BaseButton';
import BaseButton from './BaseButton';
import PillButton from './PillButton';
//
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
function add(a, b) {
    return a + b;
}
//
// function odd() {
//     return false;
// }

export default add;

export { BaseButton, PillButton };
