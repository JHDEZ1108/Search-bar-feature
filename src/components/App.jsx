/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import { Container } from "@mui/material"
import Searcher from "@components/Searcher";

const App = () => {

  const [inputUser, setInputUser] = useState('JHDEZ1108');
  const [userState, setState] = useState('inputUser');
  
  return(
    <Container sx={{
      background: 'whitesmoke',
      width: '80vw',
      height: '500px',
      borderRadius: '16px',
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Searcher inputUser={inputUser} setInputUser={setInputUser}/>
    </Container>
  )
};

export default App;
