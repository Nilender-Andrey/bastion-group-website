import React from 'react';
import styled from 'styled-components/macro';
import { ButtonStyle } from '../components';

const DisplayOn = () => {
  return (
    <DisplayOnContainer>
      <DisplayOnText>Выводить по</DisplayOnText>

      <DisplayOnButton isActive={true}>9</DisplayOnButton>
      <DisplayOnButton>15</DisplayOnButton>
      <DisplayOnButton>21</DisplayOnButton>
    </DisplayOnContainer>
  );
};

export default DisplayOn;

const DisplayOnContainer = styled.div`
  flex: 1 0 250px;

  display: flex;
  align-items: center;
`;
const DisplayOnText = styled.div`
  margin-right: 13px;

  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.009em;

  color: #000000;
`;

const DisplayOnButton = styled(ButtonStyle)<{ isActive?: boolean }>`
  padding-top: 1px;
  margin-right: 7px;
  width: 28px;
  height: 28px;

  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? '#FFFFFF' : 'transparent')};

  font-weight: 300;
  font-size: 17px;
  color: ${({ isActive }) => (isActive ? '#C93E33' : '#000000')};
`;
