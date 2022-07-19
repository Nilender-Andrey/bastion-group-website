import React, { useState } from 'react';

export type UseInputType = {
  value: string;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function useInput(
  initialValue: string,
  inputValidation?: (str: string) => string,
): UseInputType {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (inputValidation) {
      setValue(inputValidation(value));
    } else {
      setValue(value);
    }
    setError('');
  };

  return {
    value,
    error,
    setError,
    setValue,
    onChange,
  };
}
