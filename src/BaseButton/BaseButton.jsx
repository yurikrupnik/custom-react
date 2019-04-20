import React from 'react';
import PropTypes from 'prop-types';

const BaseButton = (props) => {
    const { children } = props;
    return (
        <butten>
            {children}
        </butten>

    );
};

BaseButton.propTypes = {
    children: PropTypes.func.isRequired
};

export default BaseButton;
