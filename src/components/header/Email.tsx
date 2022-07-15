import React from 'react';
import styled from 'styled-components/macro';
import emailIcon from '../../assets/icon/mail.svg';

const Email = () => {
  return (
    <EmailContainer>
      <EmailLink href='mailto:info@bastion.pro'>info@bastion.pro</EmailLink>
    </EmailContainer>
  );
};

export default Email;

const EmailContainer = styled.div`
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: inline-block;

    width: 15px;
    height: 15px;
    margin-right: 10px;
    background: url(${emailIcon}) center no-repeat;
  }
`;

const EmailLink = styled.a`
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  letter-spacing: 0.008em;

  color: #333333;
`;
