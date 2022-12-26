/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import { Paper, Grid, Typography } from "@mui/material";
import React from "react";

const PaperInformation = (props) => {
  const { userState } = props
  const {
    public_repos,
    followers,
    following
  } = userState


  return(
    <Paper elevation={3} sx={{backgroundColor: '#132F4C', color:'#E7EBF0'}}>
      <Grid
        container
        sx={{ 
        textAlign: "center",
        marginTop: "15px",
        marginBottom: "15px",
        }}
      >
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Respos</Typography>
          <Typography variant="body1">{public_repos}</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Followers</Typography>
          <Typography variant="body1">{followers}</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Following</Typography>
          <Typography variant="body1">{following}</Typography>
        </Grid>
      </Grid>
    </Paper>
  )
};

export default PaperInformation;

