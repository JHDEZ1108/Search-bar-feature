/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Container } from "@mui/material"
import Searcher from "@components/Searcher";
import { getUser } from "@services/users"
import UserCard from "@containers/UserCard";

const App = () => {

  const [inputUser, setInputUser] = useState('JHDEZ1108');
  const [userState, setUserState] = useState('inputUser');
  const [notFound, setNotFound] = useState(false);
  
  const getGitHubUser =  async (user) =>{
    const userResponse = await getUser(user);
    
    if(userState === 'JHDEZ1108'){
      localStorage.setItem('JHDEZ1108', userResponse)
    }
    
    if(userResponse.message === 'Not Found'){
      const { JHDEZ1108 } = localStorage;
      setInputUser(JHDEZ1108, userResponse);
      setNotFound(true);
    }else{
      setUserState(userResponse);
    }
    
  };
  useEffect(() => {
    getGitHubUser(inputUser);
  },[inputUser]);
  
  return(
    <Container sx={{
      background: 'whitesmoke',
      borderRadius: '16px',
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Searcher inputUser={inputUser} setInputUser={setInputUser}/>
      <UserCard userState={userState} />
    </Container>
  )
};

export default App;
