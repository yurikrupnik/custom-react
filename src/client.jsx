import React from 'react';
import PropTypes from 'prop-types';
import {render} from 'react-dom'; // eslint-disable-line
import {BrowserRouter} from 'react-router-dom'; // eslint-disable-line
import App from './components/App';
import * as components from './index';

const Yebal = () => (
    <span>yebalaaaaa</span>
);

const componentsChildren = {
    BaseButton: Yebal,
    PillButton: () => ('random string'),
};

const componentsProps = {
    BaseButton: {
        shit() {}
    }
};

const routes = Object.keys(components).reduce((acc, next) => {
    const Com = components[next];
    const { propTypes } = Com; // eslint-disable-line
    if (!propTypes) {
        return acc;
    }
    const Children = componentsChildren[next];
    const p = componentsProps[next] || {};
    return acc.concat({
        path: `/${next}`,
        key: next,
        render: props => (
            <Com {...Object.assign({}, props, p)}>
                <Children />
            </Com>
        )
    });
}, []);


const { Provider } = React.createContext();
const ProviderCom = (props) => {
    const { children } = props;
    const [state, setSate] = React.useState(false);

    const toggle = React.useCallback(() => {
        setSate(!state);
    }, [state]);

    return (
        <Provider value={{
            toggle,
            state
        }}
        >
            {children}
        </Provider>
    );
};

ProviderCom.propTypes = {
    children: PropTypes.node.isRequired
};

render(
    <BrowserRouter>
        <App routes={routes} providers={[ProviderCom]} />
    </BrowserRouter>,
    global.document.getElementById('root')
);
