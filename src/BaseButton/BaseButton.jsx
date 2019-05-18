import React from 'react';
import PropTypes from 'prop-types';

const BaseButton = (props) => {
    const { children, onClick } = props;
    return (
        <button type="button" onClick={onClick}>
            {children}
        </button>
    );
};

BaseButton.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

// module.exports = BaseButton
export default BaseButton;
