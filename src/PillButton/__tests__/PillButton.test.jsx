import React from 'react'; // eslint-disable-line
import { render, cleanup } from 'react-testing-library';
import Component from '../PillButton';

afterEach(cleanup);

test(`render ${Component.name} Component`, () => {
    const props = {};
    render(
        <Component {...props}>
            lol
        </Component>
    );
});
