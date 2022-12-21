import React, {useState} from "react";
import { Stack, TextField, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

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
        sx={{
          width: '100%',
        }}
      />
      <IconButton
        onClick={handleSubmit}
        size="small"
        sx={{
          left: '-50px'
        }}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  )
}

export default Searcher;
