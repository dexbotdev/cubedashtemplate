import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledHeader = styled(Layout.Header)`
  padding: 0 20px
  width: 80rem
`

const StyledMenu = styled(Menu)`
  background: transparent;
  line-height: 41px;
  border: none;
`

const MenuItemStyled = styled(Menu.Item)`
  && {
    top: 4px;
    border-bottom: 4px solid transparent;

    &:hover {
      border-bottom: 4px solid transparent;
      & > a {
        color: #ffffff;
        opacity: 1;
      }
    }
  }
  &&.ant-menu-item-selected
  {
    color: white;
    border-bottom: 4px solid white;

    & > a {
      opacity: 1;
    }
  }
  && > a {
    color: #ffffff;
    opacity: 0.60;
    font-weight: bold;
    letter-spacing: 0.01em;
  }
`

const Header = ({ location }) => (

  <div style={{display:'flex', background:'#43436B'}}>   
   <img  width="150px" height={'39px'} style={{"paddingLeft":"25px","paddingTop":"10px"}} src="images/logo/logo.png" />

  <StyledHeader >
    
      <StyledMenu
      mode="horizontal"
      selectedKeys={[location.pathname]}
    >   
       
      <MenuItemStyled key="/explore">
        <Link to="/explore">Explore</Link>
      </MenuItemStyled>
      <MenuItemStyled key="/">
        <Link to="/">Dashboard</Link>
      </MenuItemStyled>
    </StyledMenu>
  </StyledHeader>
  </div>
);

export default Header;
