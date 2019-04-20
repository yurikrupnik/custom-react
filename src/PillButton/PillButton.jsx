import styled from 'styled-components';
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

export default StyuledButton;
