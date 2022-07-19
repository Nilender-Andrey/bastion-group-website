import React, { FC, useState } from 'react';
import styled from 'styled-components/macro';
import helpIcon from '../../../assets/icon/help.svg';
import arrowDownIcon from '../../../assets/icon/arrow-down_black.svg';

interface IFilter {
  title: string;
  children?: React.ReactNode;
}

const Filter: FC<IFilter> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openingHandler = () => {
    setIsOpen((value) => !value);
  };

  return (
    <ItemFilterContainer isOpen={isOpen}>
      <FilterButton isOpen={isOpen} onClick={openingHandler}>
        <img src={arrowDownIcon} alt='icon' />
      </FilterButton>
      <FilterTitle>
        {title} <FilterButtonHelp isOpen={isOpen} />
      </FilterTitle>

      {children}
    </ItemFilterContainer>
  );
};

export default Filter;

const ItemFilterContainer = styled.div<{ isOpen: boolean }>`
  position: relative;

  padding: 22px 19px 0 19px;
  height: ${(props) => (props.isOpen ? '159px' : '59px')};

  overflow: hidden;
  transition: height 0.25s;

  border-bottom: 1px solid #e6e6e6;
`;

const FilterTitle = styled.h4`
  position: relative;

  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.009em;

  color: #000000;
`;

const FilterButton = styled.button<{ isOpen: boolean }>`
  position: absolute;
  top: 19px;
  right: 12px;
  z-index: 1;

  width: 30px;
  height: 30px;

  border: none;
  background-color: #fff;

  cursor: pointer;

  img {
    width: 14px;
    height: 14px;

    transform: rotate(${(props) => (props.isOpen ? '180deg' : '0deg')});
    transition: transform 0.25s;
  }
`;

const FilterButtonHelp = styled.button<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'none' : 'inline-block')};

  width: 11px;
  height: 11px;

  border: none;
  background: #fff url(${helpIcon}) center no-repeat;

  cursor: pointer;
`;
