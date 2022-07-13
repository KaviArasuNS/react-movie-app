import Badge from '@mui/material/Badge';
import {AddMovie} from './AddMovie';
import {MovieList} from './MovieList';
import { EditMovie } from './EditMovie';
import Paper from '@mui/material/Paper';
import {Counter} from './Counter'
import { AddColor } from './AddColor';
import { Home } from './Home';
import { NotFound } from './NotFound';
import { TicTacToe } from './TicTacToe';
import logo from './logo.svg';
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import './App.css';
import './tictactoe.css';
import { MovieDetails } from './MovieDetails';
import { useState } from 'react';
import { Movie } from './Movie';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BasicForm } from './BasicForm';
export default App;





function App() {
  const INITIAL_MOVIE_LIST = [
    {
      id: '100',
      name: "Shutter Island",
      poster: "https://flxt.tmsimg.com/assets/p3531967_p_v13_am.jpg",
      rating: 8.2,
      summary: "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.",
      trailer: "https://www.youtube.com/embed/v8yrZSkKxTA",
    },
    {
      id: '101',
      name: "Irandam Ulagaporin Kadaisi Gundu",
      poster: "https://m.media-amazon.com/images/M/MV5BNjZlNjgwZGUtYTdhOC00MWM0LWI5MWQtNTZkNzc5OTFjMWExXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_.jpg",
      rating: 8.1,
      summary: "A lorry driver ends up in possession of an unexploded bomb that is being sought after by both the cops and pro-peace activists.",
      trailer: "https://www.youtube.com/embed/hV9_L6vKKno",
    },
    {
      id: '102',
      name: "12 Years a Slave",
      poster: "https://m.media-amazon.com/images/M/MV5BMjExMTEzODkyN15BMl5BanBnXkFtZTcwNTU4NTc4OQ@@._V1_FMjpg_UX1000_.jpg",
      summary: "In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.",
      rating: 8.1,
      trailer: "https://www.youtube.com/embed/z02Ie8wKKRg",
    },
    {
      id: '103',
      name: "8 Thottakkal",
      rating: 7.5,
      summary: "A depressed and loyal policeman loses his gun to a killer, who kills people due the circumstances of his life.",
      poster: "https://m.media-amazon.com/images/M/MV5BMDkwNmMwMDgtZDA3YS00MWExLWI4ODItNjc2Njk2YTg3NjBhXkEyXkFqcGdeQXVyODk4ODEyMjk@._V1_.jpg",
      trailer: "https://www.youtube.com/embed/gQ69ct9Ksfk",
    },
    {
      id: '104',
      name: "The Butterfly Effect",
      poster: "https://m.media-amazon.com/images/M/MV5BODNiZmY2MWUtMjFhMy00ZmM2LTg2MjYtNWY1OTY5NGU2MjdjL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
      rating: 7.6,
      summary: "Evan Treborn suffers blackouts during significant events of his life. As he grows up, he finds a way to remember these lost memories and a supernatural way to alter his life by reading his journal.",
      trailer: "https://www.youtube.com/embed/B8_dgqfPXFg",
    },
    {
      id: '105',
      name: "Lucifer",
      poster: "https://i.pinimg.com/originals/26/13/ae/2613ae6cf3bf049cfc92f212add0a900.jpg",
      rating: 7.5,
      summary: "A political Godfather dies and a lot of thieves dressed up as politicians took over the rule. Question arises regarding the successor of the God, unfolding few names, along with the God's most beloved angel, Lucifer.",
      trailer: "https://www.youtube.com/embed/x1-Ya0NZQso",
    },
    {
      id: '106',
      name: "The Platform",
      poster: "https://cdn.traileraddict.com/content/netflix/the-platform-poster.jpg",
      rating: 7.0,
      summary: "A mysterious place, an indescribable prison, a deep hole. An unknown number of levels. Two inmates living on each level. A descending platform containing food for all of them. An inhuman fight for survival, but also an opportunity for solidarity.",
      trailer: "https://www.youtube.com/embed/RlfooqeZcdY",
    },
    {
      id: '107',
      name: "Kadaseela Biriyani",
      poster: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d8e031f5-1ee9-4dc9-8d52-851ce4adc93d/dev4uv8-7c939013-6511-48e9-bcc4-4aa7f64566c1.jpg/v1/fill/w_1280,h_1968,q_75,strp/kadaseela_biriyani___audio_release_poster_by_sivadigitalart_dev4uv8-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTk2OCIsInBhdGgiOiJcL2ZcL2Q4ZTAzMWY1LTFlZTktNGRjOS04ZDUyLTg1MWNlNGFkYzkzZFwvZGV2NHV2OC03YzkzOTAxMy02NTExLTQ4ZTktYmNjNC00YWE3ZjY0NTY2YzEuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.qtlHFAFbBOvjg1UxCnXM7NO8NKSZ_Sp7Yo49aoBdGHY",
      rating: 7.5,
      summary: "Hoping to avenge their father's death, a trio of brothers break into the local landlord's rubber estate. What begins as an idyllic plan quickly devolves into an increasingly bizarre and violent survival chase at the hands of the landlord's maniac son.",
      trailer: "https://www.youtube.com/embed/U7zJwUFwoxg",
    }
  ];
  const [movieList, setMovieList] = useState(INITIAL_MOVIE_LIST)

  const [theme, setTheme] = useState(true);

  const darkTheme = createTheme({
  palette: {
    mode: theme ? 'light' : 'dark',
  },
});

const navigate = useNavigate();
  
  return (
     <ThemeProvider theme={darkTheme}>
     <Paper elevation={4} style={{minHeight: "100vh", borderRadius: "0px"}}>
    <div>
       <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
          <Button color="inherit" onClick={() => navigate("/movies")}>Movies</Button>
          <Button color="inherit" onClick={() => navigate("/add-movies")}>Add Movies</Button>
          <Button color="inherit" onClick={() => navigate("/color-game")}>Color Game</Button>
          <Button color="inherit" onClick={() => navigate("/tic-tac-toe")}> Tic Tac Toe</Button>
          
          
          
          <Button style={{marginLeft:"auto"}}color="inherit" onClick={() => setTheme(!theme)}>Theme</Button>

        </Toolbar>
      </AppBar>
        <section className="route-container">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="color-game" element={<AddColor />} />

        <Route path="/movies" element={<MovieList/>} />

        <Route path="/add-movies" element={<AddMovie/>}/>  

        <Route path="/tic-tac-toe" element={<TicTacToe />} />

        <Route path="/movies/edit/:id" element={<EditMovie />} />

        {/* <Route path="/films" element={<Navigate replace to="/movies"/>} /> */}
        <Route path="/movies/:id" element={<MovieDetails />} />
        
        <Route path="/404" element={<NotFound/>}></Route>
        {/* <Route path="*" element={<Navigate replace to="/404" />}/> */}

        <Route path="/basic-form" element={<BasicForm/>}></Route>
       </Routes>
      </section>
    </div>
    </Paper>
    </ThemeProvider> 
  );

}


