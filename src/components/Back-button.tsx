import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import arrowLeftIcon from '../assets/icon/arrow-left.svg';

const BackButton = () => {
  let navigate = useNavigate();

  return <BackButtonContainer onClick={() => navigate(-1)} />;
};

export default BackButton;

export const BackButtonContainer = styled.button`
  width: 26px;
  height: 26px;
  margin-right: 20px;

  border-radius: 50%;
  background: #ffffff url(${arrowLeftIcon}) center no-repeat;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.98, 0.98);
    transform-origin: center bottom;
  }
`;
