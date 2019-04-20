import React from 'react';
import PropTypes from 'prop-types';

const BaseButton = (props) => {
    const { children } = props;
    return (
        <buttnn>
            {children}
        </buttnn>

    );
};

BaseButton.propTypes = {
    children: PropTypes.string.isRequired
};

export default BaseButton;
