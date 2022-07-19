import React, { FC } from 'react';
import styled from 'styled-components/macro';

import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';

interface ISliderPriceProps {
  min: string;
  max: string;
  changeMinPrice: (value: string) => void;
  changeMaxPrice: (value: string) => void;
  minPriceFilter: string;
  maxPriceFilter: string;
}

const SliderPrice: FC<ISliderPriceProps> = ({
  min,
  max,
  changeMinPrice,
  changeMaxPrice,
  minPriceFilter,
  maxPriceFilter,
}) => {
  const onChangeHandler = (sliderValues: number | number[]) => {
    if (Array.isArray(sliderValues)) {
      if (sliderValues[0] !== +minPriceFilter)
        changeMinPrice(sliderValues[0].toString());
      if (sliderValues[1] !== +maxPriceFilter)
        changeMaxPrice(sliderValues[1].toString());
    }
  };

  return (
    <SliderPriceContainer>
      <RangeSlider
        range
        min={+min}
        max={+max}
        step={1}
        value={[+minPriceFilter, +maxPriceFilter]}
        defaultValue={[+min, +max]}
        onChange={onChangeHandler}
      />
    </SliderPriceContainer>
  );
};

export default SliderPrice;

const SliderPriceContainer = styled.div``;

const RangeSlider = styled(Slider)``;
