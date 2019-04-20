import React from 'react';
import PropTypes from 'prop-types';

const BaseButton = (props) => {
    const { children } = props;
    return (
        <button type="button">
            {children}
        </button>

    );
};

BaseButton.propTypes = {
    children: PropTypes.string.isRequired
};

export default BaseButton;
