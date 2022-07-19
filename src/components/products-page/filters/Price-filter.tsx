import React, { FC } from 'react';
import styled from 'styled-components/macro';
import Filter from './Filter';
import SliderPrice from './Slider-price';

interface IPriceFilterProps {
  min: string;
  max: string;
  minPriceFilter: string;
  maxPriceFilter: string;
  changeMinPrice: (value: string) => void;
  changeMaxPrice: (value: string) => void;
}

const PriceFilter: FC<IPriceFilterProps> = ({
  min,
  max,
  changeMinPrice,
  changeMaxPrice,
  minPriceFilter,
  maxPriceFilter,
}) => {
  return (
    <Filter title='Цена, руб.'>
      <div>
        <PriceLabel>
          <PriceInput
            type='number'
            placeholder={min}
            min={min}
            max={maxPriceFilter || max}
            step='1'
            value={minPriceFilter}
            onChange={(e) => changeMinPrice(e.target.value)}
          />
        </PriceLabel>

        <PriceLabel>
          <PriceInput
            type='number'
            placeholder={max}
            max={max}
            min={minPriceFilter || min}
            step='1'
            value={maxPriceFilter}
            onChange={(e) => changeMaxPrice(e.target.value)}
          />
        </PriceLabel>
      </div>

      <SliderPrice
        max={max}
        min={min}
        changeMinPrice={changeMinPrice}
        changeMaxPrice={changeMaxPrice}
        minPriceFilter={minPriceFilter}
        maxPriceFilter={maxPriceFilter}
      />
    </Filter>
  );
};

export default PriceFilter;

const PriceLabel = styled.label`
  position: relative;

  display: inline-block;
  width: 108px;
  margin: 20px 13px 20px 0;

  &:last-child {
    margin-right: 0px;
  }

  &:before {
    position: absolute;
    top: 13px;
    left: 14px;

    content: 'от';

    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.009em;
    color: #000000;
  }

  &:last-child:before {
    content: 'до';
  }
`;

const PriceInput = styled.input`
  padding: 9px 5px 8px 31px;
  width: 100%;
  height: 35px;

  border: 1px solid #e6e6e6;
  border-radius: 2px;
  background: #ffffff;

  font-size: 15px;

  &::placeholder {
    color: #b3b3b3;
  }
`;
