import React from "react";
import { Stack, TextField, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Searcher= () => {
  return(
    <Stack 
    direction = 'row' 
    sx={{
      marginTop: '30px',
      width: '80%'
    }}>
      <TextField 
      id="filled-basic" label="Github User" variant="filled" 
      color="primary"
      placeholder="Search user"
      size="small"
      sx={{
        width: '100%',
      }}
      />
      <IconButton sx={{
        left: '-50px'
      }}>
        <SearchIcon />
      </IconButton>
    </Stack>
  )
}

export default Searcher;
