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
    <div className="flex justify-between mt-8">
      <div className="flex gap-3">
        <Select
          options={OPTION1}
          value={formState.select2}
          onChange={(value) => handleChange('select1', value)}
          label="Select 1"
        />
        <input
          type="text"
          placeholder="Min Price"
          className="py-2 px-2 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        />
        <input
          type="text"
          placeholder="Max Price"
          className="py-2 px-2 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        />
        <Select
          options={OPTION1}
          value={formState.select2}
          onChange={(value) => handleChange('select1', value)}
          label="Select 1"
        />
        <Select
          options={OPTION1}
          value={formState.select2}
          onChange={(value) => handleChange('select1', value)}
          label="Select 1"
        />
      </div>
      <Select
        options={OPTION1}
        value={formState.select2}
        onChange={(value) => handleChange('select1', value)}
        label="Select 1"
      />
    </div>
  );
};

export default Filter;
