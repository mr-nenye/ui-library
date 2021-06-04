import React, {useState} from 'react'
import styled, {css} from 'styled-components'

const TooltipContainer = styled.div`
    position: relative;
    z-index: 10;

    & .tooltip-box {
        position: absolute;
        background: rgba(0, 0, 0, 0.7);
        color: #fff;
        padding: 5px;
        border-radius: 5px;
        top: calc(100% + 5px);
        display: none;
        font-size: 0.75rem;

        &.visible {
            display: block;
        }

    }

    & .tooltip-arrow {
        position: absolute;
        top: -10px;
        left: 50%;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent rgba(0, 0, 0, 0.7) transparent;
    }
`

export const Tooltip = ({ children, text, ...rest }) => {
    const [show, setShow] = React.useState(false);
  
    return (
      <TooltipContainer>
        <div className={show ? 'tooltip-box visible' : 'tooltip-box'}>
          {text}
          <span className="tooltip-arrow" />
        </div>
        <div
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          {...rest}
        >
          {children}
        </div>
      </TooltipContainer>
    );
};
