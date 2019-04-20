import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const mainColor = '#b3d7ee';
const textColor = '#333';

const StyledButton = styled(Button)`
    &&: {
        width: 16px
        padding: 3.5 0;
        min-height: 22px;
        font-size: 11px;
        border-radius: 5px;
        
        &:hover {
            color: ${mainColor};        
            background: ${textColor};        
        }
    }   
`;

const PillButton = (props) => {
    const { children } = props;
    return (
        <StyledButton>
            {children}
        </StyledButton>
    );
};

PillButton.propTypes = {
    children: PropTypes.string.isRequired
};

export default PillButton;
