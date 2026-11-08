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
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import Avatar from '@mui/material/Avatar';
import { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";




export default function MovieCard({ movie, action  }) {
  const { favorites, addToFavorites } = useContext(MoviesContext);
  const { watchList, addToWatchList } = useContext(MoviesContext);

  if (favorites.find((id) => id === movie.id)) {
    movie.favorite = true;
  } else {
    movie.favorite = false
  }
  
  if (watchList.find((id) => id === movie.id)) {
    movie.watch = true;
  } else {
    movie.watch = false
  }
  
  
  const handleAddToFavorite = (e) => {
    e.preventDefault();
    addToFavorites(movie);
  };
	
	const handleAddToWatchList = (e) => {
    e.preventDefault();
    addToWatchList(movie);
  };

  
  return (
    <Card style={{backgroundColor: "rgb(245,245,245)"}}>
        <CardHeader
			title={
			  <Typography variant="h6" component="p">
				{movie.title}{" "}
			  </Typography>
			}
			avatar={
			  movie.favorite ? (
				<Avatar sx={{backgroundColor:'white', color: 'red' }}>
				  <FavoriteBorderIcon />
				</Avatar>
			  ) : movie.watch ? (
				<Avatar sx={{backgroundColor:'white', color: 'red' }}>
				  <VisibilityOutlinedIcon />
				</Avatar>
			  ) : null
			}
		  />

		<CardActions disableSpacing>
			<Link to={`/movies/${movie.id}`}>
				<Button variant="outlined" size="medium" style={{backgroundColor:"rgb(255, 240, 230)", color:"rgb(0,0,0)"}}>
					Details
				</Button>
			</Link> 
		</CardActions>

    </Card>
  );
}
