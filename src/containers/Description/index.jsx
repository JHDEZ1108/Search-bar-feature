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
      <Stack>
        {bio !== null 
          ? <Typography>{bio}</Typography>
          : <Typography>Lorem ipsum dolor sit amet. Ea excepturi doloribus ea praesentium nihil nam dolore laboriosam ad fugit nobis</Typography>
        }
      </Stack>
      <PaperInformation userState={userState} />
      <LocationInformation userState={userState} />
    </Fragment>
  )
};

export default Description;
