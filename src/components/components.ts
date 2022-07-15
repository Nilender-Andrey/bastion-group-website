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
  transition: 0.15s linear;
  background: #c93e33;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.98);
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

type TextProps = {
  fs?: string;
  ta?: string;
  color?: string;
  m?: string;
  p?: string;
  fw?: string;
  v?: string;
  lh?: string;
};

export const Text = styled.p<TextProps>`
  font-size: ${(props) => props.fs || '1.6rem'};
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.color || '#24173d'};
  text-align: ${(props) => props.ta};
  margin: ${(props) => props.m};
  padding: ${(props) => props.p};
  visibility: ${(props) => props.v};
  line-height: ${(props) => props.lh}; ;
`;

type FlexProps = {
  jc?: string;
  ai?: string;
  fw?: string;
  g?: string;
  fd?: string;

  m?: string;
};

export const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${(props) => props.jc || 'center'};
  align-items: ${(props) => props.ai || 'center'};
  flex-wrap: ${(props) => props.fw};
  gap: ${(props) => props.g};
  flex-direction: ${(props) => props.fd};
  margin: ${(props) => props.m};
`;

export const Container = styled.div`
  max-width: 1110px;
  margin: 0 auto;
`;
