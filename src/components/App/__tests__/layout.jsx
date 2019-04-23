import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Layout from '../layout';

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

test('render Layout Component', () => {
    const tree = (
        <Router history={createBrowserHistory()}>
            <Layout routes={routes} />
        </Router>
    );

    render(tree);
});
