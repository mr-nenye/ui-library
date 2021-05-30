import React, { useCallback, useState } from "react";
import styled, {css} from 'styled-components';
import { transparentize, darken } from "polished";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    margin-top: ${(props) => props.spaceTop};
    /* left: 0; */
`

const AppLogo = styled.div`
  height: 50px;
  margin-bottom: 10px;
  padding: 0 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: none;
  align-content: center;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
  top: 0;
  left: 0;
  & svg,
  img {
    height: 40px;
  }
  @media screen and (max-width: 600px) {
    display: flex;
  }
`;

const SideMenu = styled.div`
    width: ${(props) => props.collapse ? props.closeWidth : props.openWidth};
    display: block;
    z-index:  ${(props) => props.zIndex};
    background-color: ${(props) => props.bgColor ? props.bgColor : "#fff"};
    position: fixed;
    box-sizing: border-box;
    height: 100vh;
    top: 0;left:0;
    padding: 20px;
    overflow: auto;
    overflow-x: hidden;
    white-space: nowrap;

    ${(props) =>
    props.collapse &&
    css`
        width: ${(props) => props.closeWidth};
    `}

    & .sidemenu {
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;

        & .menuItem {
            & a {
                box-sizing: border-box;
                cursor: pointer;
                width: 100%;
                display: block;
                border-radius: 5px;
                text-transform: capitalize;
                font-size: ${(props) => props.fontSize};
                text-decoration: none;
                padding: 15px 10px;
                color: ${(props) => props.fontColor ? props.fontColor : "#17223b"};

                & i {
                    margin-right: 28px;
                }

                &.active {
                    background-color: ${(props) => props.activeLinkColor ? props.activeLinkColor : "#e42c64"};
                    color: ${(props) => props.activeLinkFontColor ? props.activeLinkFontColor : "#fff" };

                    &:hover {
                        background-color: ${(props) => props.activeLinkColor ? props.activeLinkColor : "#e42c64"};
                        color: ${(props) => props.activeLinkFontColor ? props.activeLinkFontColor : "#fff" };
                    }
                }
                &:hover {
                    background-color: ${(props) => transparentize(0.9, props.hoverLinkColor ? props.hoverLinkColor : "#17223b" )};
                    color: ${(props) => props.hoverLinkFontColor ? props.hoverLinkFontColor : "#17223b" };
                }
            }
        }
    }
`

const Content = styled.div`
    margin-left: ${(props) => props.openWidth};
    background-color: ${(props) => props.contentBgcolor ? props.contentBgcolor : "#FAFAFA"};
    height: 100vh;
    flex-grow: 1;

    ${(props) =>
    props.collapse &&
    css`
        margin-left: ${(props) => props.closeWidth};
    `}
`

const SidebarItem = ({
    icon,
    name,
    label,
    link,
    subItems,
    isActive,
    depthStep = 10,
    depth = 0,
    onClick,
    ...rest
  }) => {
    return (
      <>
        <li
          onClick={useCallback(() => onClick(name), [name])}
          className={`menuItem ${isActive ? "active" : ""}`}
          {...rest}
          key={name}
        >
          <NavLink to={link}>
            {icon &&
              <i className={icon} />
            }
            <span className="menuText" style={{ paddingLeft: depth * depthStep }}>
              {label}
            </span>
          </NavLink>
        </li>
        {/* {Array.isArray(subItems) ? (
          <ul className="sidemenu">
            {subItems.map((subItem) => (
              <SidebarItem
                key={subItem.name}
                depth={depth + 1}
                depthStep={depthStep}
                {...subItem}
              />
            ))}
          </ul>
        ) : null} */}
      </>
    );
  };

export const Layout = ({menuItems, depthStep, depth, ...props}) => {
    const [active, setActive] = useState(null);
    return (
        <LayoutContainer {...props}>
            {props.noSideMenu ? (null) : (
                <SideMenu
                    openWidth={props.openWidth}
                    fontSize={props.fontSize}
                    collapse={props.collapse}
                    iconsOnly={props.iconsOnly}
                    // collapsedWidth={props.collapsedWidth}
                    bgColor={props.bgColor}
                >
                    {props.appLogo ? (
                        <AppLogo>
                        <img src={props.appLogo} />
                        </AppLogo>
                    ) : null}
                    <ul className="sidemenu">
                        {menuItems.map((sidebarItem, index) => (
                            <SidebarItem
                            key={sidebarItem.name}
                            depthStep={depthStep}
                            depth={depth}
                            onClick={setActive}
                            isActive={active === sidebarItem.name}
                            {...sidebarItem}
                            />
                        ))}
                    </ul>
                </SideMenu>
            )}
            <Content {...props}>
                {props.children}
            </Content>
        </LayoutContainer>
    )
}

Layout.defaultProps = {
    openWidth: '250px',
    closeWidth: '100px',
    zIndex: 99,
    // bgColor: '#FFF',
    fontSize: "13px",
    spaceTop: '0',
    collapse: false,
};
  
Layout.propTypes = {
    openWidth: PropTypes.string,
    closeWidth: PropTypes.string,
    zIndex: PropTypes.number,
    bgColor: PropTypes.string,
    collapse: PropTypes.bool,
    fontSize: PropTypes.string,
    spaceTop: PropTypes.string,
    contentBgcolor: PropTypes.string,
    noSideMenu: PropTypes.bool,
    fontColor: PropTypes.string,
    appLogo: PropTypes.any,
    activeLinkColor: PropTypes.string,
    activeLinkFontColor: PropTypes.string,
    hoverLinkColor: PropTypes.string,
    hoverLinkFontColor: PropTypes.string,
};