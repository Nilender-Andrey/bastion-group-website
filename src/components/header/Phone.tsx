import React from 'react';
import styled from 'styled-components/macro';
import phoneIcon from '../../assets/icon/phone.svg';

const Phone = () => {
  return (
    <PhoneContainer>
      <PhoneLink href='tel:+74993807890'>+7 (499) 380-78-90</PhoneLink>
    </PhoneContainer>
  );
};

export default Phone;

const PhoneContainer = styled.div`
  display: flex;
  align-items: center;

  margin: 0 0 0 auto;

  &::before {
    content: '';
    display: inline-block;

    width: 15px;
    height: 15px;
    margin-right: 10px;
    background: url(${phoneIcon}) center no-repeat;
  }
`;

const PhoneLink = styled.a`
  font-weight: 700;
  font-size: 1.143rem;
  line-height: 21px;
  letter-spacing: 1px;

  color: #000000;
  text-decoration: none;
`;
