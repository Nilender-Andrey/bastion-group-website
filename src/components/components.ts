import styled from 'styled-components/macro';

export const ButtonStyle = styled.button`
  position: relative;
  width: 100%;

  height: 42px;

  color: #ffffff;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.009em;

  border-radius: 4px;
  background: #c93e33;

  transition: all 0.15s linear;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.98, 0.98);
    transform-origin: center bottom;
  }
`;

export const OptionsButton = styled(ButtonStyle)`
  display: flex;
  align-items: center;

  padding-left: 18px;
  height: 56px;

  border-bottom: 1px solid #e6e6e6;
  background-color: transparent;

  font-size: 18px;
  color: #000000;

  &:before {
    content: '';
    width: 17px;
    height: 17px;
    margin-right: 10px;
  }
`;

export const InputStyle = styled.input`
  height: 42px;
  width: 100%;
  padding: 12px 48px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;

  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.009em;
  color: #000000;

  &:focus {
    outline: 1px solid #24173d;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1110px;
  margin: 0 auto;
`;

export const PageTitle = styled.h2`
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 1px;
  color: #000000;
`;

export const PageHeadContainer = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 30px;
`;

export const PageContent = styled.div`
  display: flex;

  background-color: #ffffff;
  border: 1px solid #e6e6e6;
`;

export const ProductLabel = styled.label`
  display: block;

  max-width: 480px;
  margin: 20px auto;
  text-align: left;

  p {
    padding-left: 10px;
    height: 14px;

    font-weight: 700;
    color: #c93e33;
  }
`;

export const ProductCardCertificateStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: fit-content;
  min-width: 83px;
  height: 20px;
  margin-bottom: 25px;

  background: #c93e331a;

  border-radius: 2px;

  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.009em;
  color: #c93e33;
`;

export const ProductCardNameStyle = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.009em;
  color: #000000;
`;

export const ProductCardPrice = styled.div`
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.009em;
  color: #b3b3b3;
`;
