// // import BaseButton from './BaseButton';
import BaseButton from './BaseButton';
import PillButton from './PillButton';
//
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
    console.log('using production');
}
if (process.env.NODE_ENV === 'development') {
    console.log('using development');
}
function add(a, b) {
    return a + b;
}
//
// function odd() {
//     return false;
// }

export default add;

export { BaseButton, PillButton };
