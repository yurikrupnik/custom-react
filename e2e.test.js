// import add, { BaseButton } from './dist/main';
// import add, { BaseButton } from './dist/umd';
import add, { BaseButton } from './dist/main';
import React from 'react';

// console.log('add', add);
console.log('add', add);
console.log('BaseButton', BaseButton, React.isValidElement(BaseButton));
// React.isValidElement(BaseButton)
test('add', () => {
    // expect(add(1, 2)).toBe(3);
    expect(add(1, 2)).toBe(3);
});
