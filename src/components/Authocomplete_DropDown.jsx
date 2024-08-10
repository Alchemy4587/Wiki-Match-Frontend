import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 500 }}
      renderInput={(params) => <TextField {...params} label="Choose Language" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'English', year: 1994 },
  { label: 'French', year: 1972 },
  { label: 'Catalan', year: 1974 },
  { label: 'Rusian', year: 2008 },
  { label: 'Spanish', year: 1957 },
  { label: "Lingua", year: 1993 },
  { label: 'Italian', year: 1994 },
]