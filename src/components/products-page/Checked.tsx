import React, { FC, useState } from 'react';
import styled from 'styled-components/macro';

interface IChecked {
  title: string;
  bb?: string;
}

const Checked: FC<IChecked> = ({ title, bb }) => {
  const [isChecked, setIsChecked] = useState(false);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(() => event.target.checked);
  };

  return (
    <ItemCheckedContainer bb={bb}>
      <CheckedLabel isChecked={isChecked}>
        <input type='checkbox' onChange={onChangeHandler} />
        {title}
      </CheckedLabel>
    </ItemCheckedContainer>
  );
};

export default Checked;

const ItemCheckedContainer = styled.div<{ bb?: string }>`
  position: relative;

  padding: 22px 19px 0 19px;
  height: 59px;

  border-bottom: ${(props) => props.bb || '1px solid #e6e6e6'};
`;

const CheckedLabel = styled.label<{ isChecked: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;

  user-select: none;

  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.009em;
  color: #b3b3b3;

  &:before {
    content: '';
    display: inline-block;
    width: 18px;
    height: 18px;

    background: #ffffff;
    border: 1px solid #e6e6e6;
    border-radius: 2px;
  }

  &::after {
    position: absolute;
    top: 4px;
    left: 4px;

    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;

    transform: scale(${(props) => (props.isChecked ? '0' : '1')});
    transition: transform 0.25s;

    background: #c93e33;
  }

  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
`;
