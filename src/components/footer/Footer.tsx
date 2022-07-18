import React from 'react';
import styled from 'styled-components/macro';
import footerImg from '../../assets/img/footer.png';
import { Container } from '../components';

const Footer = () => {
  return (
    <FooterWrap>
      <FooterContainer />
    </FooterWrap>
  );
};

export default Footer;

const FooterWrap = styled.footer`
  height: 290px;
  margin-top: 68px;

  background-color: #222628;
`;

const FooterContainer = styled(Container)`
  position: relative;
  top: -68px;
  z-index: 1;

  background: url(${footerImg}) center no-repeat;
  height: 358px;
`;
