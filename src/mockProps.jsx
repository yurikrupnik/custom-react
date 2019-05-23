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
                onClick: function () {},
                title: 'as1'
            },
            {
                onClick: function () {},
                title: 'as2'
            }
        ]
    }
};

export {
    componentsChildren,
    componentsProps
};
