import styled, {css} from 'styled-components'
import PropTypes from 'prop-types';
import {lighten} from 'polished';

const ButtonContainer = styled.div`
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.fontColor};
    padding: ${(props) => props.padding};
    font-family: 'Courier New', Courier, monospace;
    box-shadow: 0 3px 12px rgba(227,222,222,.5);
    font-size: 14px;
    border-radius: ${(props) => props.round ? `${props.height / 2}px` : '5px'};

    ${(props) =>
    props.spacing &&
    css`
        margin: ${(props) => props.spacing};
    `}

    ${(props) =>
    props.outlined && css `
        background: transparent;
        border: 1px solid ${(props) => props.bgColor};
        color: ${(props) => props.bgColor};
    `
    }

    ${(props) =>
    props.naked && css `
        background: transparent;
        border: none;
        color: ${(props) => props.fontColor};
        box-shadow: none;

        &:hover {
            background-color: ${(props) => lighten(.76, props.fontColor)};
            box-shadow: 0 3px 12px rgba(227,222,222,.5);
        }
    `
    }

    &:hover {
        box-shadow: 0 3px 12px rgba(227,222,222,.8); 
    }
`

export const Button = (props) => {
    return (
        <ButtonContainer 
        {...props}
        onClick={props.onClick}
        >
            {props.children}
        </ButtonContainer>
    )
}

Button.defaultProps = {
    bgColor: '#ececec',
    fontColor: '#373737',
    height: 38,
    padding: '0 20px',
    round: false,
    spacing: false,
};
  
Button.propTypes = {
    bgColor: PropTypes.string,
    fontColor: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    padding: PropTypes.string,
    round: PropTypes.bool,
    spacing: PropTypes.any,
    outlined: PropTypes.bool
};