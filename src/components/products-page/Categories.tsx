import React from 'react';
import styled from 'styled-components/macro';
import { ButtonStyle, OptionsButton } from '../components';
import categoriesIcon from '../../assets/icon/categories.svg';
import arrowDownIcon from '../../assets/icon/arrow-down_black.svg';
import arrowDownIconRed from '../../assets/icon/arrow-down.svg';
import Category from './Category';

const categories = [
  {
    id: 1,
    series: 'Серия 5.904-1 выпуск 1',
    name: 'Детали крепления воздуховодов',
    quantity: 95,
  },
  {
    id: 2,
    series: 'Серия 4.903-10 Выпуск 4,5,6',
    name: 'Изделия и детали трубопроводов для тепловых сетей',
    quantity: 15,
  },
  {
    id: 3,
    series: 'Серия 4.900-9 Выпуск 1',
    name: 'Узлы и детали трубопроводов из пластмассовых труб для систем водоснабжения и канализации',
    quantity: 247,
  },
  {
    id: 4,
    series: 'Серия 3.900-9',
    name: 'Опорные конструкции и средства крепления трубопроводов',
    quantity: 2,
  },
  {
    id: 5,
    series: 'Л8-508.000 - Л8-524.000',
    name: 'Опоры и подвески трубопроводов Дн<89мм',
    quantity: 15,
  },
  {
    id: 6,
    series: 'Л8-138.000 - Л8-200.000',
    name: 'Опоры и подвески станционных трубопроводов',
    quantity: 247,
  },
];

const Categories = () => {
  return (
    <CategoriesContainer>
      <CategoriesButton>Категории</CategoriesButton>
      <CategoriesList>
        {categories.map((item) => (
          <Category {...item} key={item.id} />
        ))}
      </CategoriesList>

      <ShowAllCategoriesButton>Показать все</ShowAllCategoriesButton>
    </CategoriesContainer>
  );
};

export default Categories;

const CategoriesContainer = styled.div`
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 28px;
`;

const CategoriesButton = styled(OptionsButton)`
  &:before {
    background: url(${categoriesIcon}) center no-repeat;
  }
  &::after {
    content: '';
    width: 14px;
    height: 14px;
    margin-left: 98px;

    background: url(${arrowDownIcon}) center no-repeat;
  }
`;

const CategoriesList = styled.ul`
  padding: 21px 32px 7px 18px;
`;

const ShowAllCategoriesButton = styled(ButtonStyle)`
  display: flex;
  align-items: center;
  gap: 5px;

  background-color: transparent;

  margin-left: 18px;
  max-width: 90px;
  height: fit-content;

  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #c93e33;

  &::after {
    content: '';
    width: 10px;
    height: 10px;

    background: url(${arrowDownIconRed}) center no-repeat;
  }
`;
