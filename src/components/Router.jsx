import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import ListMovies from './ListMovies';
import MovieDetail from './MovieDetail';

const Router = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/films' element={<ListMovies />} />
            <Route path='/films/:idFilm' element={<MovieDetail />} />
        </Routes>
    </BrowserRouter>
  );
};

export default Router;