// // import BaseButton from './BaseButton';
// import Loadable from './Loadable';
// if (process.env.NODE_ENV === 'production') {
// const BaseButton = import(/* webpackChunkName: "BaseButton" */'./BaseButton');
// const PillButton = import(/* webpackChunkName: "PillButton" */'./PillButton');
//
// const DataGraph = import(/* webpackChunkName: "DataGraph" */'./DataGraph');
//
// const ButtonGroup = import(/* webpackChunkName: "ButtonGroup" */'./ButtonGroup');
// }

// import BaseButton from './BaseButton';
// import PillButton from './PillButton';
// import ButtonGroup from './ButtonGroup';
// import DataGraph from './DataGraph';
//
// export {
//     BaseButton,
//     PillButton,
//     DataGraph,
//     ButtonGroup
// };
export { default as PillButton } from './PillButton';
export { default as ButtonGroup } from './ButtonGroup';
export { default as DataGraph } from './DataGraph';
export { default as BaseButton } from './BaseButton';
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

// export {
//     BaseButton, PillButton, DataGraph, ButtonGroup
// };
