import React from 'react'; // eslint-disable-line
import { render, cleanup } from 'react-testing-library';
import Component from '../ButtonGroup';

afterEach(cleanup);

test(`render ${Component.name} Component`, () => {
    const props = {
        data: [
            {
                onclick: jest.fn(),
                label: 'as',
                children: () => (
                    <div>
                        hello
                    </div>
                )
            }
        ]
    };
    render(<Component {...props} />);
});
