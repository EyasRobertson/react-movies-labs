import React from "react";
import Actor from "../actorCardSmaller/";
import Grid from "@mui/material/Grid";

const ActorListSmaller = (props) => {
  let actorCards = props.people.map((a) => (
    <Grid key={a.id} size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} sx={{padding: "20px"}}>
        <Actor key={a.id} actor={a} />
    </Grid>
  ));
  return actorCards;
};

export default ActorListSmaller;
