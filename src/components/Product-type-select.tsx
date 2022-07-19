import React, { FC } from 'react';
import { IProductType } from '../types/Product';
import styled from 'styled-components/macro';
import { InputStyle, ProductLabel } from './components';
import { UseSelectType } from '../hooks/useSelect';

interface ProductTypeSelectProps {
  productType: IProductType[];
  children?: React.ReactNode;
  type: UseSelectType;
}

const ProductTypeSelect: FC<ProductTypeSelectProps> = ({
  productType,
  children,
  type,
}) => {
  return (
    <Label>
      <Select as='select' {...type}>
        {!productType.length && (
          <option value=''>Нет ни одного типа продукта</option>
        )}
        {productType.length && <option value=''>Выберите тип продукта</option>}
        {productType.length &&
          productType.map((item) => (
            <option value={item.nameType} key={item.idType}>
              {item.nameType}
            </option>
          ))}
      </Select>
      {children}
    </Label>
  );
};

export default ProductTypeSelect;

const Label = styled(ProductLabel)``;

const Select = styled(InputStyle)`
  padding: 10px;
  margin-bottom: 5px;
`;
