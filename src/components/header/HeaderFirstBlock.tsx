import React from 'react';
import styled from 'styled-components/macro';
import { Container } from '../components';
import Email from './Email';
import Nav from './Navbar';
import Phone from './Phone';
import City from './Сity';

const HeaderFirstBlock = () => {
  return (
    <HeaderFirstBlockContainer>
      <Nav />
      <Phone />
      <City />
      <Email />
    </HeaderFirstBlockContainer>
  );
};

export default HeaderFirstBlock;

const HeaderFirstBlockContainer = styled(Container)`
  display: flex;
  align-items: center;

  padding: 14px 0;
`;
