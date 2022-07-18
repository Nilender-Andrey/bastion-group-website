import React, { useState } from 'react';

type UseFileInputType = {
  value: string;
  error: string;
  path: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function useFileInput(): UseFileInputType {
  const [value, setValue] = useState('');
  const [path, setPath] = useState('');
  const [error, setError] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    /* event.persist(); */
    setError('');
    setPath('');

    if (event.currentTarget.files && event.currentTarget.files.length) {
      const file = event.currentTarget.files[0];
      setValue(event.currentTarget.value);

      const img = new Image();

      img.src = window.URL.createObjectURL(file);

      img.onload = () => {
        setPath(() => img.src);
      };
      img.onerror = () => {
        setError('Не удалось загрузить файл');
      };
    }
  };

  return {
    value,
    path,
    error,
    setError,
    setValue,
    onChange,
  };
}
