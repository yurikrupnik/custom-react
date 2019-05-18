// import BaseButton from './BaseButton';
import Loadable from '../Loadable';

const BaseButton = Loadable({
    loader: import('./BaseButton')
});

export default BaseButton;
