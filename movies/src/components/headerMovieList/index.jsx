import React from "react";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AppBar from '@mui/material/AppBar';
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";

const Header = (props ) => {
	const title = props.title
    const navigate = useNavigate();

  return (
  <AppBar position="fixed" color="00000" sx={{ top: 'auto', bottom: 0 }}>
    <Paper 
      component="div" 
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginBottom: 1.5,
		color:"rgb(30,95,30)"
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
	</AppBar>
  );
};

export default Header;
