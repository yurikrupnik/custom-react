import React from 'react';
import PropTypes from 'prop-types';
import { render, cleanup } from 'react-testing-library';
import Providers from '../providers';

afterEach(cleanup);

const Context1 = React.createContext();
const Context2 = React.createContext();
const ProviderCom1 = (props) => {
    const { children } = props;
    const [state, setSate] = React.useState(false);

    const toggle = React.useCallback(() => {
        setSate(!state);
    }, [state]);

    return (
        <Context1.Provider value={{
            toggle,
            state
        }}
        >
            {children}
        </Context1.Provider>
    );
};
ProviderCom1.propTypes = {
    children: PropTypes.node.isRequired
};
const ProviderCom2 = (props) => {
    const { children } = props;
    const [state, setSate] = React.useState(true);

    const toggle = React.useCallback(() => {
        setSate(!state);
    }, [state]);

    return (
        <Context2.Provider value={{
            toggle,
            state
        }}
        >
            {children}
        </Context2.Provider>
    );
};
ProviderCom2.propTypes = {
    children: PropTypes.node.isRequired
};

describe('providers', () => {
    it('renders three <Providers /> components', () => {
        render(
            <Providers providers={[ProviderCom1, ProviderCom2]}>
                <div>
                    asd
                </div>
            </Providers>
        );
    });
});
