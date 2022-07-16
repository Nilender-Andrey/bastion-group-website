import React, { FC } from 'react';
import styled from 'styled-components/macro';

interface ICategory {
  id: number;
  series: string;
  name: string;
  quantity: number;
}

const Category: FC<ICategory> = ({ series, name, quantity }) => {
  return (
    <CategoryContainer>
      <CategorySeries>{series}</CategorySeries>
      <CategoryName>
        {name}
        <CategoryQuantity>{quantity}</CategoryQuantity>
      </CategoryName>
    </CategoryContainer>
  );
};

export default Category;

const CategoryContainer = styled.li`
  margin-bottom: 14px;
`;
const CategorySeries = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.009em;
  color: #b3b3b3;
`;
const CategoryName = styled(CategorySeries)`
  color: #000000;
`;

const CategoryQuantity = styled.div`
  position: relative;
  top: -1px;
  left: 3px;

  display: inline-block;

  width: fit-content;
  height: 12px;
  padding: 1px 5px;

  background: #c93e33;
  border-radius: 50px;

  font-weight: 400;
  font-size: 8px;
  line-height: 12px;
  letter-spacing: 0.009em;
  color: #efefef;
  text-align: center;
`;
