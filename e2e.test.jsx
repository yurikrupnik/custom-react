// import add, { BaseButton } from './dist/main';
// import add, { BaseButton } from './dist/umd';
// import add, { BaseButton } from './dist/main';
import React from 'react';
import { render } from 'react-testing-library';
import * as all from './dist/main';
import { componentsChildren, componentsProps } from './src/mockProps';

describe('test bundle', () => {
    Object.keys(all).forEach((value) => {
        if (value === 'default') {
            return;
        }
        test(`${value}`, () => {
            const Com = all[value];
            const Children = componentsChildren[value];
            const props = componentsProps[value] || {};
            render(
                (
                    <Com {...props}>
                        <Children />
                    </Com>
                )
            );
        });
    });

    test('add', () => {
        expect(all.default(1, 2)).toBe(3);
    });
});
