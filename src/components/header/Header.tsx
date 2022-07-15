import React from 'react';
import styled from 'styled-components/macro';
import BreadCrumb from './BreadCrumb';
import HeaderFirstBlock from './HeaderFirstBlock';
import HeaderSecondBlock from './HeaderSecondBlock';

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderFirstBlock />
      <HeaderSecondBlock />
      <BreadCrumb />
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header``;
