import React from 'react';
import styled from 'styled-components/macro';
import { ButtonStyle, OptionsButton } from '../components';
import arrowLeftIcon from '../../assets/icon/arrow-left_pagination.svg';
import arrowRightIcon from '../../assets/icon/arrow-right__pagination.svg';

const Pagination = () => {
  return (
    <PaginationContainer>
      <PaginationButton>
        <img src={arrowLeftIcon} alt='Назад' />
      </PaginationButton>
      <PaginationButton isActive={true}>1</PaginationButton>
      <PaginationButton>2</PaginationButton>
      <PaginationButton>3</PaginationButton>
      <PaginationButton>4</PaginationButton>
      <PaginationButton>5</PaginationButton>
      <PaginationButton>
        <img src={arrowRightIcon} alt='Вперед' />
      </PaginationButton>

      <ShowAllButton>Показать все товары</ShowAllButton>
    </PaginationContainer>
  );
};

export default Pagination;

const PaginationContainer = styled.div`
  flex: 1 1 auto;
  padding-top: 1px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const PaginationButton = styled(ButtonStyle)<{ isActive?: boolean }>`
  width: 37px;
  height: 35px;
  margin-left: -1px;

  border: 1px solid #e6e6e6;
  background-color: #ffffff;
  border-radius: 0;

  font-weight: 400;
  font-size: 12px;

  color: ${({ isActive }) => (isActive ? '#000000' : '#B3B3B3')};
`;

const ShowAllButton = styled(OptionsButton)`
  height: fit-content;
  width: fit-content;
  margin-left: 38px;
  padding: 0;

  font-weight: 400;
  font-size: 15px;
  color: #c93e33;

  &:before {
    display: none;
  }
`;
