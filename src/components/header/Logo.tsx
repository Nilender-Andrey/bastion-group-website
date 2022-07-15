import React from 'react';
import styled from 'styled-components/macro';
import logoImg from './../../assets/img/header__logo.png';

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImg src={logoImg} />
      <LogoText>Производитель металлических изделий №1</LogoText>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  max-width: 211px;
  padding-top: 2px;
`;

const LogoImg = styled.img`
  flex: 1 1 82px;
`;

const LogoText = styled.p`
  flex: 1 1 114px;

  margin-top: -5px;

  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.009em;
`;
