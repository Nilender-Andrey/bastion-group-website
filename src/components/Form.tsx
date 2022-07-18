import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { ButtonStyle } from './components';

type FormProps = {
  children?: React.ReactNode;
  submit?: (event: React.SyntheticEvent) => void;
  buttonText?: string;
};

const Form: FC<FormProps> = ({ children, submit, buttonText }) => {
  return (
    <FormContainer onSubmit={submit}>
      {children}

      <FormButton type='submit'>{buttonText}</FormButton>
    </FormContainer>
  );
};

export default Form;

const FormContainer = styled.form`
  width: 100%;
  text-align: center;
  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

const FormButton = styled(ButtonStyle)`
  max-width: 200px;
`;
