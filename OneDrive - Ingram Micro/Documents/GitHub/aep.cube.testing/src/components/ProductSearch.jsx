import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

function ProductSearch() {
  // State for the currently selected relationship
  const [relationship, setRelationship] = React.useState('');

  // Handler function for updating the selected relationship
  const handleRelationshipChange = (event) => {
    setRelationship(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '25px' }}>
      {/* Text field for inputting a SKU */}
      <TextField label="SKU" variant="outlined" sx={{ width: '50%' }} />

      {/* Dropdown menu for selecting a relationship */}
      <FormControl variant="outlined" sx={{ width: '50%'}}>
        <InputLabel id="relationship-label">Relationship</InputLabel>
        <Select
          labelId="relationship-label"
          id="relationship-select"
          value={relationship}
          label="Relationship"
          onChange={handleRelationshipChange}
        >
          {/* Menu items for different relationship options */}
          <MenuItem value="equals">Equals</MenuItem>
          <MenuItem value="contains">Contains</MenuItem>
          <MenuItem value="startsWith">Starts With</MenuItem>
          <MenuItem value="endsWith">Ends With</MenuItem>
        </Select>
      </FormControl>

      {/* Submit button */}
      <Button sx={{ width: '30%' }} size="large" variant="contained" onClick={handleSubmit}>Submit</Button>
    </Box>
  );
}

export default ProductSearch;
