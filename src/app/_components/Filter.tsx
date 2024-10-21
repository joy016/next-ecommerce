'use client';

import { useState } from 'react';
import Select from './Select';
import { OPTION1 } from '../../../constants/listpage';

const Filter = () => {
  const [formState, setFormState] = useState<{
    [key: string]: string | number;
  }>({
    select1: '',
    select2: '',
  });

  const handleChange = (key: string, value: string | number) => {
    setFormState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <div>
      <Select
        options={OPTION1}
        value={formState.select2}
        onChange={(value) => handleChange('select1', value)} // Pass unique key
        label="Select 1"
      />
    </div>
  );
};

export default Filter;
