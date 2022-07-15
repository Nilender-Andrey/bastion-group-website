import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import arrowIcon from '../../assets/icon/chevron.svg';
import { Container } from '../components';

const BreadCrumb = () => {
  return (
    <BreadCrumbContainer as='ul'>
      <BreadCrumbItem>
        <BreadCrumbLink to='#!'>Главная</BreadCrumbLink>
      </BreadCrumbItem>
      <BreadCrumbItem as='ul'>
        <BreadCrumbLink to='#!'>Интернет-магазин</BreadCrumbLink>
      </BreadCrumbItem>
      <BreadCrumbItem as='ul'>
        <BreadCrumbLink to='#!'>Опоры трубопроводов</BreadCrumbLink>
      </BreadCrumbItem>
    </BreadCrumbContainer>
  );
};

export default BreadCrumb;

const BreadCrumbContainer = styled(Container)`
  display: flex;

  padding: 17px 0 13px 0;
`;

const BreadCrumbItem = styled.li`
  display: flex;
  align-items: center;

  background: url('../assets/icon/installment_plan.svg') center/contain
    no-repeat;

  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.009em;

  color: #b3b3b3;

  &:not(:last-child)::after {
    content: '';
    width: 6px;
    height: 6px;
    margin: 0 10px;

    background: url(${arrowIcon}) center no-repeat;
  }

  &:last-child {
    font-weight: 500;
    color: #000000;
  }
`;

const BreadCrumbLink = styled(Link)`
  color: inherit;
`;
