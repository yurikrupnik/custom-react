import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { Router as Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Router from '../index';

const Child = () => (
    <div>
        asd
    </div>
);

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

afterEach(cleanup);

it('should render Router', () => {
    render(
        <Route history={createBrowserHistory()}>
            <Router routes={routes}>
                <Child />
            </Router>
        </Route>
    );
});
