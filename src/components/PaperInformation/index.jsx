/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import { Paper, Stack, Typography } from "@mui/material";
import React from "react";

const PaperInformation = (props) => {
  const { userState } = props
  const {
    public_repos,
    followers,
    following
  } = userState


  return(
    <Paper elevation={3}>
      <Stack 
        spacing={3}
        direction="row"
        sx={{
          justifyContent: 'space-evenly',
          marginLeft: '20px'
        }}
      >
        <Stack>
          <Typography variant="h5">Respos</Typography>
          <Typography variant="h6">{public_repos}</Typography>
        </Stack>
        <Stack>
          <Typography variant="h5">Followers</Typography>
          <Typography variant="h6">{followers}</Typography>
        </Stack>
        <Stack>
          <Typography variant="h5">Following</Typography>
          <Typography variant="h6">{following}</Typography>
        </Stack>
      </Stack>
    </Paper>
  )
};

export default PaperInformation;

