import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { render, cleanup } from 'react-testing-library';
import MainNav from '../nav';

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

test('renders <Nav /> component', () => {
    render(
        <Router history={createBrowserHistory()}>
            <MainNav routes={routes} />
        </Router>
    );
});
