/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Container } from "@mui/material"
import Searcher from "@components/Searcher";
import { getUser } from "../services/users"

const App = () => {

  const [inputUser, setInputUser] = useState('1');
  const [userState, setUserState] = useState('inputUser');
  const [notFound, setNotFound] = useState(false);
  
  const getGitHubUser =  async (user) =>{
    const userResponse = await getUser(user);
    
    if(userState === '1'){
      localStorage.setItem('pokemonID', userResponse)
    }
    
    if(userResponse.message === 'Not Found'){
      const {pokemonID} = localStorage;
      setInputUser(pokemonID);
      setNotFound(true);
    }else{
      setUserState(userResponse);
    }
    
  };
  console.log(userState);
  useEffect(() => {
    getGitHubUser(inputUser);
  },[inputUser]);
  
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
