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
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import Avatar from '@mui/material/Avatar';
import { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";



export default function MovieCard({ movie, action  }) {
  const { favorites, addToFavorites } = useContext(MoviesContext);

  if (favorites.find((id) => id === movie.id)) {
    movie.favorite = true;
  } else {
    movie.favorite = false
  }

  const handleAddToFavorite = (e) => {
    e.preventDefault();
    addToFavorites(movie);
  };


  
  return (
    <Card style={{backgroundColor: "rgb(245,245,245)"}}>
        <CardHeader
			title={
			  <Typography variant="h5" component="p">
				{movie.title}{" "}
			  </Typography>
			}
			avatar={
			  movie.favorite ? (
				<Avatar sx={{backgroundColor:'white', color: 'red' }}>
				  <FavoriteBorderIcon />
				</Avatar>
			  ) : null
			}
		  />

      <CardMedia
        sx={{ height: 500 }}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid size={{xs: 6}}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid size={{xs: 6}}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" color="warning"/>
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
      
        {action(movie)}
      
        <Link to={`/movies/${movie.id}`}>
          <Button variant="outlined" size="medium" style={{backgroundColor:"rgb(228, 241, 245)"}}>
            See More!
          </Button>
        </Link>
        
      </CardActions>

    </Card>
  );
}
