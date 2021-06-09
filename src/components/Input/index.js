import styled, {css} from 'styled-components'
import PropTypes from 'prop-types';
import {lighten, darken} from 'polished'

const InputContainer = styled.div`
    border-radius: ${(props) => props.round ? `${props.height / 2}px` : '5px'};
    position: relative;
    width: 100%;

    & .input-wrapper {
      position: relative;
      display: flex;
      align-items: center;

      & .prefix {
        position: absolute;
        height: 42px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
        left: 0;
        opacity: 0.4;

        ${(props) => props && css`
          opacity: .2;
        `}

      }
      & .suffix {
        position: absolute;
        height: 42px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
        right: 0;
        opacity: 0.4;

        ${(props) => props && css`
          opacity: .2;
        `}
      }

      & .input {
        width: 100%;
        border-radius: ${(props) => props.round ? `${props.height / 2}px` : '5px'};
        height: ${props=> props.height}px;
        line-height: 150%;
        box-sizing: border-box;
        border: 1px solid #ccc;
        /* padding: ${(props) => props.padding}; */
        padding-left: ${({ iconLeft }) => (iconLeft ? '35px' : '10px')};
        padding-right: ${({ iconRight }) => (iconRight ? '35px' : '10px')};
        outline: none;
        font-family: 'montserrat', sans-serif;

        &::placeholder {
          color: ${darken(0.05, '#d1d1d1')};
        }

        &:focus {
          border-color: #1ee3cf
        }

        &:disabled {
          border: 1px dashed #d1d1d1;
          background-color: lighten(0.3, '#d1d1d1');
        }

      
      }
    }

    
`

export const Input = (props) => {
    const {iconLeft, iconRight, placeholder, ...rest} = props
    return (
        <InputContainer {...props}>
          <div className="input-wrapper">
            {iconLeft && (
              <span className="prefix">
                <i className={iconLeft} />
              </span>
            )}
            <input className="input" placeholder={placeholder} {...rest}/>
            {iconRight && (
              <span className="suffix">
                <i className={iconRight} />
              </span>
            )}
          </div>
        </InputContainer>
    )
}

Input.defaultProps = {
    height: 38,
    // padding: '0 10px',
};
  
Input.propTypes = {
    height: PropTypes.number,
    padding: PropTypes.string,
    placeholder: PropTypes.string,
    iconLeft: PropTypes.string,
    iconRight: PropTypes.string,
    type: PropTypes.oneOf(['text', 'number', 'email', 'password', 'search']),
    disabled: PropTypes.bool
};