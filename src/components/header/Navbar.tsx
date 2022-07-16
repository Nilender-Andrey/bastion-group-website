import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLink to='add-product-types'>Типы продуктов</NavbarLink>
      <NavbarLink to='add-products'>Продукты</NavbarLink>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.nav``;

const NavbarLink = styled(NavLink)`
  margin-right: 20px;

  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.009em;
  text-decoration: none;

  color: #000000;

  transition: 0.15s;

  &:hover {
    color: #b3b3b3;
  }
  &.active {
  }

  &:last-child {
    margin-right: 0;
  }
`;
