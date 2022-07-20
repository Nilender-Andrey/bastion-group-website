import React from 'react';
import styled from 'styled-components/macro';
import localIcon from '../../assets/icon/local.svg';
import arrowDownIcon from '../../assets/icon/arrow-down.svg';

const City = () => {
  return (
    <CityContainer>
      <CitySelect name='city'>
        <option value='moscow'>Москва</option>
      </CitySelect>
    </CityContainer>
  );
};

export default City;

const CityContainer = styled.div`
  display: flex;
  align-items: center;

  width: 84px;
  margin: 0 23px 0 31px;

  &::before {
    content: '';
    width: 15px;
    height: 15px;
    margin-right: 10px;

    background: url(${localIcon}) center no-repeat;
  }
`;

const CitySelect = styled.select`
  width: 65px;
  height: 14px;

  background-color: transparent;

  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.009em;

  color: #c93e33;

  appearance: none;

  background: url(${arrowDownIcon}) 86% 40% no-repeat;

  cursor: pointer;
`;
