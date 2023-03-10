/* eslint-disable react/prop-types */
import React, { Fragment } from "react";
import { Stack, Typography } from "@mui/material";

import PaperInformation from "@components/PaperInformation";
import LocationInformation from "@components/LocationInformation";

const Description = (props) => {
  const { userState } = props;
  const { bio } = userState
  return(
    <Fragment>
      <Stack sx={{justifyContent: 'center'}}>
        {bio !== null 
          ? <Typography variant="body1" sx={{color: '#B2BAC2'}}>{bio}</Typography>
          : <Typography variant="body1" sx={{color: '#B2BAC2'}}>Without description</Typography>
        }
      </Stack>
      <PaperInformation userState={userState} />
      <LocationInformation userState={userState} />
    </Fragment>
  )
};

export default Description;
