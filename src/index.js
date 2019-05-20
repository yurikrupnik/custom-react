// // import BaseButton from './BaseButton';
import Loadable from './Loadable';
// if (process.env.NODE_ENV === 'production') {
const BaseButton = Loadable({
    loader: import(/* webpackChunkName: "BaseButton" */'./BaseButton')
});
const PillButton = Loadable({
    loader: import(/* webpackChunkName: "PillButton" */'./PillButton')
});

const DataGraph = Loadable({
    loader: import(/* webpackChunkName: "DataGraph" */'./DataGraph')
});

const ButtonGroup = Loadable({
    loader: import(/* webpackChunkName: "ButtonGroup" */'./ButtonGroup')
});
// }

// export { default as BaseButton } from './BaseButton';
// export { default as PillButton } from './PillButton';
// export { default as ButtonGroup } from './ButtonGroup';
// export { default as DataGraph } from './DataGraph';
// import PillButton from './PillButton';

// function add(a, b) {
//     return a + b;
// }

// function minus(a, b) {
//     return a - b;
// }

// export default {
//     BaseButton,
// };

export {
    BaseButton, PillButton, DataGraph, ButtonGroup
};
