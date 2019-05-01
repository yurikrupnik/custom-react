import React from 'react'; // eslint-disable-line
import { render, cleanup, fireEvent } from 'react-testing-library';
import Component from '../index';

afterEach(cleanup);

const props = {
    onClick: jest.fn()
};

test(`render ${Component.name} Component`, () => {
    render(
        <Component {...props}>
            lol
        </Component>
    );
});

test(`render ${Component.name} click event`, () => {
    const { getByText } = render(
        <Component {...props}>
            lol
        </Component>
    );
    fireEvent.click(getByText(/lol/i));
});
