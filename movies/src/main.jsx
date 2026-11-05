import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import SiteHeader from './components/siteHeader'
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import UpcomingPage from './pages/upcomingMoviesPage';
import PopularPage from './pages/popularActorsPage';
import ActorPage from './pages/actorDetailsPage';




const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
  <QueryClientProvider client={queryClient}>
		<BrowserRouter>
		<SiteHeader />
		<MoviesContextProvider>
		  <Routes>
		  	<Route path="/movies/upcoming" element={ <UpcomingPage />}/>//shows upcoming movies
			<Route path="/movies/favorites" element={<FavoriteMoviesPage />} />//shows the users favourites
			<Route path="/actors/popular" element={<PopularPage />} />//shows popular people in the industry - NOT JUST ACTORS
			<Route path="/reviews/form" element={ <AddMovieReviewPage /> } />//to add a review
			
			<Route path="/movies/:id" element={<MoviePage />} />//single movie details
			<Route path="/actors/:id" element={<ActorPage />}/> //single person details
			<Route path="/reviews/:id" element={ <MovieReviewPage /> } />//reviews for a given movie
			
			<Route path="/" element={<HomePage />} />//home
			<Route path="*" element={ <Navigate to="/" /> } />//home

		  </Routes>
		 </MoviesContextProvider>
		</BrowserRouter>
		<ReactQueryDevtools initialIsOpen={false} />
	</QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);
