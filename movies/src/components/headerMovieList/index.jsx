import React from "react";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";

const Header = (props ) => {
	const title = props.title
    const navigate = useNavigate();

  return (
    <Paper 
      component="div" 
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginBottom: 1.5,
      }}
    >
        <IconButton aria-label="go back" onClick={() => navigate(-1)}>
			<ArrowLeftIcon color="warning" fontSize="large" />
		</IconButton>


        <Typography variant="h4" component="h3">
			<b>{title}</b>
        </Typography>
        <IconButton aria-label="go forward" onClick={() => navigate(+1)}>
			<ArrowRightIcon color="warning" fontSize="large" />
        </IconButton>

    </Paper>
  );
};

export default Header;
