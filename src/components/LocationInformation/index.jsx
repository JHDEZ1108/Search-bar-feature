/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';

const LocationInformation = (props) => {
  const { userState } = props
  const {
    location,
    twitter_username,
    blog,
    company
  } = userState;
  return(
    <Grid 
      container
      spacing={2}
      sx={{
        alignItems: 'center',
        color: '#B2BAC2'
      }}
    >
      <Grid item xs={12} sm={6}>
        <Stack direction="row" spacing={2}>
          <LocationOnIcon sx={{color: '#E7EBF0'}}/>
          <Typography>{location}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stack direction="row" spacing={2}>
          <TwitterIcon sx={{color: '#E7EBF0'}}/>
          {twitter_username !== null
            ? <Typography>{`@${twitter_username}`}</Typography>
            : <Typography>Not Available</Typography>
          }
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stack direction="row" spacing={2}>
          <LanguageIcon sx={{color: '#E7EBF0'}}/>
          {blog !== null
            ? <a target="_blank" href={`https://${blog}`} rel="noreferrer"><Typography>{blog}</Typography></a>
            : <Typography>Not Available</Typography>
          }
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stack direction="row" spacing={2}>
          <BusinessIcon sx={{color: '#E7EBF0'}}/>
          {company !== null
            ? <Typography>{company}</Typography>
            : <Typography>Not Available</Typography>
          }
        </Stack>
      </Grid>
    </Grid>
  )
}

export default LocationInformation;

