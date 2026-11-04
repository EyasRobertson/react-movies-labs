import { Link } from "react-router";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import Avatar from '@mui/material/Avatar';
//import { useContext } from "react";
//import { ActorsContext } from "../../contexts/actorsContext";



export default function ActorCard({ actor, action  }) {


  
  return (
    <Card>
        <CardHeader
			title={
			  <Typography variant="h5" component="p">
				{actor.name}{" "}//should show the actors name
			  </Typography>
			}
		  />

      <CardMedia
        sx={{ height: 500 }}
        image={//hopefully shows a picture of the actor 
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid size={{xs: 6}}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {actor.age}//Should show the actors age
            </Typography>
          </Grid>
          <Grid size={{xs: 6}}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {actor.popularity}{" "}//should show the 'popularity'
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
      
        {action(actor)}
      
        <Link to={`/person/${actor.id}`}>//this might need changed - should lead to the actors page, like with clicking on a movie in discover leads to that movies page
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
        
      </CardActions>

    </Card>
  );
}
