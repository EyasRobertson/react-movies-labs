import React from "react";

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router";

const MovieHeader = (props) => {
  const movie = props.movie;
  const navigate = useNavigate();

  return (
    <Paper 
        component="div" 
        sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            padding: 1.5,
            margin: 0,
        }}
      >
      <IconButton aria-label="go back" onClick={() => navigate(-1)} >
        <ArrowLeftIcon color="warning" fontSize="large" />
      </IconButton>
	
      <Typography variant="h4" component="h3">
		<Box sx={{ justifyContent: 'space-evenly' , flexDirection: 'row'}}>
		<a href={movie.homepage}>
          <HomeIcon color="primary" />
        </a>

        <b>{movie.title}</b>
        </Box>
        <br />
        <span sx={{ fontSize: "1.5rem" }}><i>{`   "${movie.tagline}"`} </i></span>
      </Typography>
      <IconButton aria-label="go forward" onClick={() => navigate(+1) } >
        <ArrowRightIcon color="warning" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default MovieHeader;
