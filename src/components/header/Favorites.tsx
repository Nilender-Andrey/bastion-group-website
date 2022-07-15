import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import starIcon from '../../assets/icon/star.svg';

const Favorites: FC = () => {
  return (
    <FavoritesContainer to='#!'>
      <FavoritesIcon />
      <FavoritesTitle>Избранное</FavoritesTitle>
    </FavoritesContainer>
  );
};

export default Favorites;

const FavoritesContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
`;

const FavoritesIcon = styled.div`
  width: 20px;
  height: 20px;
  background: url(${starIcon}) center no-repeat;
`;

const FavoritesTitle = styled.p`
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.009em;

  color: #000000;
`;
