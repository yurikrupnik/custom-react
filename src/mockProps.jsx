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
    }
};

export {
    componentsChildren,
    componentsProps
};
