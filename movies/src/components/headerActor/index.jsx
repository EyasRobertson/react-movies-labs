import React from "react";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AppBar from '@mui/material/AppBar';
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router";

const ActorHeader = (props) => {
  const person = props.person;
  const navigate = useNavigate();

  return (
  <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
   <Paper
        component="div" 
        sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            padding: 1.5,
            margin: 0,
        }}
    >
		<IconButton aria-label="go back" onClick={() => navigate(-1)} >
			<ArrowLeftIcon color="warning" fontSize="large" />
		</IconButton>

		<Typography variant="h4" component="h3">
			<b>
			{person.name}
			</b>

		</Typography>

		<IconButton aria-label="go forward" onClick={() => navigate(+1) } >
			<ArrowRightIcon color="warning" fontSize="large" />
		</IconButton>
		</Paper>
    </AppBar>
	
  );
};

export default ActorHeader;
