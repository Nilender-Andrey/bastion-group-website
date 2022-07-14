import styled from 'styled-components/macro';

export const ButtonStyle = styled.button`
  position: relative;
  width: 100%;
  max-width: 150px;
  height: 35px;
  color: #24173d;
  font-weight: 700;
  font-size: 1.3rem;
  border: 2px solid #24173d;
  border-radius: 5px;
  transition: 0.15s linear;
  background-color: #fff;
  &:hover {
    color: #fff;
    background-color: #24173d;
  }
  &:active {
    transform: scale(0.98);
  }
`;

export const InputStyle = styled.input`
  height: 35px;
  min-width: 280px;
  padding: 10px 20px;
  border: 2px solid #24173d;
  border-radius: 5px;
  font-size: 1.4rem;
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
