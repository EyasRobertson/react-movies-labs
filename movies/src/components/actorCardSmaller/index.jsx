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


export default function ActorCard({ actor  }) {

  return (
    <Card style={{backgroundColor: "rgb(245,245,245)"}} >
        <CardHeader
		
			title={
			  <Typography variant="h5" component="p">
				{actor.name}{" "}
			  </Typography>
			}
		  />

      <CardActions disableSpacing>
        <Link to={`/person/${actor.id}`}>
          <Button variant="outlined" size="medium" style={{backgroundColor:"rgb(228, 241, 245)"}}>
            Details
          </Button>
        </Link>
        
      </CardActions>

    </Card>
  );
}
