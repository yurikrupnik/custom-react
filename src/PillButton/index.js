import Loadable from '../Loadable';

const PillButton = Loadable({
    loader: () => import(/* webpackChunkName: "pillButton" */ './PillButton'),
});

export default PillButton;
