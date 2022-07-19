import React, { useState } from 'react';

export type UseSelectType = {
  value: string;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function useSelect(initialValue: string): UseSelectType {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    setValue(value);
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
