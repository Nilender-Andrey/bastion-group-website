import React, { FC, useRef } from 'react';
import styled from 'styled-components/macro';
import useHover from '../../hooks/useHover';
import { UseInputType } from '../../hooks/useInput';

interface IPlaceOrderInputProps {
  icon: string;
  control: UseInputType;
  placeholder: string;
  title?: string;
  type?: string;
}

const PlaceOrderInput: FC<IPlaceOrderInputProps> = ({
  icon,
  control,
  placeholder,
  title = placeholder,
  type = 'text',
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const isHovering = useHover(ref) || !!control.value;

  return (
    <PlaceOrderLabel>
      <PlaceOrderLabelTitle>{control.value ? title : ''}</PlaceOrderLabelTitle>
      <PlaceOrderInputWrap icon={icon} isHovering={isHovering}>
        <input
          ref={ref}
          value={control.value}
          onChange={control.onChange}
          type={type}
          placeholder={placeholder}
        />
      </PlaceOrderInputWrap>
      <PlaceOrderErrorText>{control.error}</PlaceOrderErrorText>
    </PlaceOrderLabel>
  );
};

export default PlaceOrderInput;

const PlaceOrderLabel = styled.label`
  display: block;
  padding: 0 0 0 0;
  margin-bottom: 3px;
`;

const PlaceOrderInputWrap = styled.div<{ icon: string; isHovering: boolean }>`
  display: flex;
  gap: 10px;

  padding: 2px 0 0 5px;

  border-bottom: 1px solid #e6e6e6;

  input {
    width: 100%;
    padding: 0 0 7px 0;

    &::placeholder {
      font-weight: 300;
      font-size: 15px;
      line-height: 18px;
      letter-spacing: 0.009em;
      color: #b3b3b3;
    }
  }

  &::before {
    content: '';
    width: 14px;
    height: 14px;

    background: url(${(props) => props.icon}) center no-repeat;

    opacity: ${(props) => (props.isHovering ? 1 : 0.5)};
  }
`;

const PlaceOrderErrorText = styled.p`
  padding: 0 0 0 10px;

  font-size: 12px;
  font-weight: 700;
  color: red;
`;

const PlaceOrderLabelTitle = styled.p`
  height: 14px;
  margin-bottom: 7px;

  font-size: 12px;
  line-height: 14px;
  color: #b3b3b3;
`;
