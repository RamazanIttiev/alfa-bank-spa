import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const ToggleButtons = ({ value, setValue }) => {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Tabs value={value} onChange={handleChange}>
        <Tab label="All posts" />
        <Tab label="Favourite posts" />
      </Tabs>
    </Box>
  );
};

export default ToggleButtons;
