// import PillButton from './PillButton';
import Loadable from '../Loadable';

const PillButton = Loadable({
    loader: () => import(/* webpackChunkName: "bas" */ './PillButton'),
});
export default PillButton;
