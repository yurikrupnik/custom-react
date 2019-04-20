import Loadable from '../Loadable';

const BaseButton = Loadable({
    loader: () => import(/* webpackChunkName: "baseButton" */ './BaseButton'),
});

export default BaseButton;
