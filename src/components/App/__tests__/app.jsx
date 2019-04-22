import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { render, cleanup } from 'react-testing-library';
import App from '../app';

afterEach(cleanup);

const routes = [
    {
        path: '/a',
        component: React.Component,
        key: 'a'
    },
    {
        path: '/b',
        component: React.Component,
        key: 'b'
    },
];

it('renders <App /> component', () => {
    const tree = (
        <Router history={createBrowserHistory()}>
            <App routes={routes} />
        </Router>
    );

    render(tree);
});
