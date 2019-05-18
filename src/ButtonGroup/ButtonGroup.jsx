import React from 'react';
import PropTypes from 'prop-types';
import BaseButton from '../BaseButton';

const ButtonGroup = (props) => {
    const { data } = props;
    return data.map(v => (
        <BaseButton onClick={v.onClick}>{v.children}</BaseButton>
    ));
};

ButtonGroup.defaultProps = {
    data: []
};

ButtonGroup.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({}))
};

// module.exports = BaseButton
export default ButtonGroup;
