
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
//import MovieReviews from "../movieReviews"
//there are no reviews 

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };
//technically not just includes actors but alas, im bad at naming things 
const ActorDetails = ({ person }) => {  // Don't miss this!
const [drawerOpen, setDrawerOpen] = useState(false);


  return (
    <>
      <Typography variant="h5" component="h3">
        Who Is This 
      </Typography>

      <Typography variant="h6" component="p">
        {person.name}//the persons name 
      </Typography>

      <Paper component="ul" sx={{...root}}>
		<Chip label={`${person.known_for_department}`} sx={{...chip}} color="primary" />//what do they do, actor? stunt? director?

        <Chip
          icon={<MonetizationIcon />}
          label={`${person.gender}`}//should show the persons gender
        />
        <Chip
          icon={<StarRate />}
          label={`${person.popularity}`}//should show the persons popularity 
        />

		</Paper>
		
		
		<Paper component="ul" sx={{...root}}>
			<li>
			  <Chip label="Known For" sx={{...chip}} color="primary" />
			</li>
			{person.known_for.map((c) => (//this should show the movies / shows that the person is known for 
				<li key={c.original_title}>
					<Chip label={c.original_title} sx={{...chip}} />
				</li>
			))}
		</Paper>
		
		
      </>
  );
};
export default MovieDetails ;
