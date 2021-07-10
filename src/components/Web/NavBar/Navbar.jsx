import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import Logo from "../../../assets/logoblanco.webp"

const Nav = styled.nav`
  width: 100%;
  height: 75px;
  background-color: rgba(13, 37, 56, 0.322);
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top:0;
  .logo {
    padding: 15px 0;
    margin-left: 40px
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <img  class="logo"src={Logo} alt="Logo Sinaptic"/>
      <Burger />
    </Nav>
  );
};

export default Navbar;
