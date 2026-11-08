
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
import Spinner from '../spinner';
import { useQuery } from "@tanstack/react-query";
import { getActorCredits } from "../../api/tmdb-api";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };


const ActorDetails = ({ person }) => {  // Don't miss this!
const [drawerOpen, setDrawerOpen] = useState(false);

	const { data, error, isPending, isError } = useQuery({
    queryKey: ['actorCreds', { id: person.id }],
    queryFn: getActorCredits,
  });
  if (isPending) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
const credits = data.cast;
console.log(credits);
  return (
    <>

    <Typography variant="h4" component="p">
        {person.name}
    </Typography>
	<Typography variant="h5" component="p">
        {person.biography}
    </Typography>

    <Paper component="ul" sx={{...root}}>
		<Chip label={`${person.known_for_department}`} sx={{...chip}} style={{backgroundColor:"rgb(255, 200, 130)", color:"rgb(0,0,0)"}}/>

        <Chip

          label={`Born : ${person.birthday}`}//
        />
		<Chip

          label={`Died : ${person.deathday}`}//
        />
        <Chip
          icon={<StarRate color="warning.light"/>}
          label={`${person.popularity}`}
        />
	</Paper>
	<Paper component="ul" sx={{...root}}>
			<li>
			  <Chip label="Also Know As " sx={{...chip}} style={{backgroundColor:"rgb(255, 200, 130)", color:"rgb(0,0,0)"}} />
			</li>
			{person.also_known_as.map((c) => (
				<li key={c}>
					<Chip label={c} sx={{...chip}} />
				</li>
			))}
	</Paper>
	<Paper component="ul" sx={{...root}}>
			<li>
			  <Chip label="Worked On" sx={{...chip}} style={{backgroundColor:"rgb(255, 200, 130)", color:"rgb(0,0,0)"}} />
			</li>
			{credits.map((credit) => (
				<li key={credit}>
					<Chip label={credit.title} sx={{...chip}} />
				</li>
			))}
	</Paper>
    </>
  );
};
export default ActorDetails ;
