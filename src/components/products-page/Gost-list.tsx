import React, { FC } from 'react';
import styled from 'styled-components/macro';

import { ButtonStyle } from '../components';

interface IGostListProps {
  gosts: string[];
  gostsSelected: string[];
  clickHandler: (value: string) => void;
}

const GostList: FC<IGostListProps> = ({
  gosts,
  gostsSelected,
  clickHandler,
}) => {
  return (
    <GostListContainer>
      {Array.from(gosts).map((gost) => (
        <GostListButton
          onClick={() => clickHandler(gost)}
          isActive={gostsSelected.includes(gost) ? true : false}
          key={gost}>
          {gost}
        </GostListButton>
      ))}
    </GostListContainer>
  );
};

export default GostList;

const GostListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;

  width: 100%;
  padding: 15px 15px 16px;

  border-bottom: 1px solid #e6e6e6;
`;

const GostListButton = styled(ButtonStyle)<{ isActive?: boolean }>`
  width: fit-content;
  height: 25px;
  padding: 6px 10px 5px 10px;

  border-radius: 4px;

  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  color: ${({ isActive }) => (isActive ? '#FFFFFF' : '#000000')};
  background: ${({ isActive }) => (isActive ? '#c93e33' : '#FFFFFF')};
`;
