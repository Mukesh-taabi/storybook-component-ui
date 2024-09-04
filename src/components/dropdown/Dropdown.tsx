import React, { useState } from 'react';
import './Dropdown.css';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';

export interface SelectProps extends React.HTMLProps<HTMLDivElement> {
  label: string;
  validstate?: "error" | "success" | 'warning';
  message?: string;
  defaultalue?: number | string;
  onchange?: (value: number | string) => void;
}

const Dropdown: React.FC<SelectProps> = ({ label, validstate, message, defaultalue, onchange, ...props }) => {
  const [value, setValue] = useState<number | string>(defaultalue ?? '');

  const handleChange = (event: SelectChangeEvent<number | string>) => {
    setValue(event.target.value);
    const newValue = event.target.value;
    if (onchange) {
      onchange(newValue);
    }
  };


  return (
    <div className='select_main_container' {...props}>
      <p className='label'>{label}</p>
      <div className='main_select'>
        {!value && <span className='placeholder_text'>{label}</span>}
        <Select
          className={`dropdown ${validstate ?? ''}`}
          value={value}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </div>
      {message && <p className={`message ${validstate ?? ''}`}>{message}</p>}
    </div>
  );
};

export default Dropdown;
