import styled, {css} from 'styled-components';
import { transparentize, darken } from "polished";
import PropTypes from "prop-types";


const HeaderContainer = styled.div`
    position: ${props => props.topBarPosition ? props.topBarPosition : "fixed"};
    top: 0;
    left: 0;
    width: 100%;
    height: ${(props) => props.topBarHeight};
    background-color: ${(props) => props.topBarBgColor ? props.topBarBgColor : "#FFF"};
    box-sizing: border-box;
    z-index: 4;
    display: flex;
    align-items: center;
    padding: 0 30px;
    font-size: ${(props) => props.fontSize};
`

export const Header = (props) => {
    return (
        <HeaderContainer {...props}>

        </HeaderContainer>
    )
}

Header.defaultProps = {
    topBarHeight: "80px",
    fontSize: "12px",
};

Header.propTypes = {
    topBarHeight: PropTypes.string,
    topBarBgColor: PropTypes.string,
    topBarPosition: PropTypes.string,
    PrimaryFontSize: PropTypes.string,
};