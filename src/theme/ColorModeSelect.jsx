import React, { useState } from 'react';
import { Select, MenuItem } from '@mui/material';

export default function ColorModeSelect(props) {
  const [mode, setMode] = useState('system'); // Default to 'system'

  const handleModeChange = (event) => {
    setMode(event.target.value);
  };

  return (
    <Select
      value={mode}
      onChange={handleModeChange}
      SelectDisplayProps={{
        'data-screenshot': 'toggle-mode',
      }}
      {...props}
    >
      <MenuItem value="system">System</MenuItem>
      <MenuItem value="light">Light</MenuItem>
      <MenuItem value="dark">Dark</MenuItem>
    </Select>
  );
}
