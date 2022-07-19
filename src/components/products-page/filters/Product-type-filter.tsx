import React, { FC } from 'react';
import { UseSelectType } from '../../../hooks/useSelect';
import { IProductType } from '../../../types/Product';
import ProductTypeSelect from '../../Product-type-select';
import Filter from './Filter';

interface ProductTypeSelectProps {
  productType: IProductType[];
  type: UseSelectType;
}

const ProductTypeFilter: FC<ProductTypeSelectProps> = ({
  productType,
  type,
}) => {
  return (
    <Filter title='Тип продукта'>
      <ProductTypeSelect productType={productType} type={type} />
    </Filter>
  );
};

export default ProductTypeFilter;
