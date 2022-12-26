import React, {useState} from "react";
import { Stack, TextField, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import '@styles/global.scss';

const Searcher= (props) => {
  // eslint-disable-next-line react/prop-types
  const { setInputUser } = props;
  
  const [valueInput, setValueInput] = useState('');
  
  const onSearchValueChange = (event) =>{
    const inputValue = event.target.value;
    setValueInput(inputValue);
  }
  
  const handleSubmit = () =>{
    setInputUser(valueInput);
  }

  return(
    <Stack 
      direction = 'row' 
      sx={{
        marginTop: '30px',
        width: '80%'
      }}
    >
      <TextField 
        id="filled-basic" label="Github User" variant="filled" 
        color="primary"
        placeholder="JHDEZ1108"
        size="small"
        value={valueInput}
        onChange={onSearchValueChange}
        inputProps={{ style: { color: '#E7EBF0' } }}
        sx={{
          width: '100%',
          backgroundColor: '#132F4C',
          "& .MuiFormLabel-root": {
            color: '#E7EBF0'
          },
          "& .MuiFormLabel-root.Mui-focused": {
              color: '#E7EBF0'
          },
          border: '1px solid #E7EBF0', 
          borderRadius: 1
        }}
      />
      <IconButton
        onClick={handleSubmit}
        size="small"
        sx={{
          left: '-50px',
          color:'#E7EBF0'
        }}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  )
}

export default Searcher;
