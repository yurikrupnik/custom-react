import React from 'react';
import PropTypes from 'prop-types';

const BaseButton = (props) => {
    const { children } = props;
    return (
        <button type="button" onClick={() => {}}>
            {children}
        </button>

    );
};

BaseButton.propTypes = {
    children: PropTypes.node.isRequired,
    // shit: PropTypes.func.isRequired
};

export default BaseButton;
