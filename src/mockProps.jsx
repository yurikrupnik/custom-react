import React from 'react';

const Example = () => (
    <span>Example</span>
);
const componentsChildren = {
    BaseButton: Example,
    PillButton: () => ('Label')
};

const componentsProps = {
    BaseButton: {
        onClick() {}
    },
    ButtonGroup: {
        data: [
            {
                onClick: () => {},
                title: 'as1'
            },
            {
                onClick: () => {},
                title: 'as2'
            }
        ]
    }
};

export {
    componentsChildren,
    componentsProps
};
