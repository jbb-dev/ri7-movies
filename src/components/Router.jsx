import React from 'react';
import { useContext } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Outlet, Navigate } from 'react-router-dom';
import { AppContext, MyContext } from '../store/AppContext';
import Login from './Connexion/Login';
import Register from './Connexion/Register';
import Header from './Header';
import ListMovies from './ListMovies';
import MovieDetail from './MovieDetail';
import Profile from './Profile';
import ProfileBis from './ProfileBis';

export const MyRoutes = {
  LOGIN: '/',
  REGISTER: '/register',
  MOVIES: '/movies',
  DETAIL_MOVIE: '/movies/detail/',
  PROFILE: '/profile'
};

const AuthRoutes = () => {
  
  const { store } = useContext(MyContext);

  return (
    store.isUserAuth ?
       <Outlet />
    : 
      <Navigate to={MyRoutes.LOGIN} />
  )
};


const Router = () => {

  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
            {/* ROUTES PUBLIQUES */}
            <Route path={MyRoutes.LOGIN} element={<Login />} />
            <Route path={MyRoutes.REGISTER} element={<Register />} />
            {/* ROUTES PRIVEES */}
            <Route element={<AuthRoutes />}>
              <Route path={MyRoutes.MOVIES} element={<ListMovies />} />
              <Route path={`${MyRoutes.DETAIL_MOVIE}:id`} element={<MovieDetail />} />
              {/* <Route path={MyRoutes.PROFILE} element={<Profile />} /> */}
              <Route path={MyRoutes.PROFILE} element={<ProfileBis />} />
            </Route>
        </Routes>
      </AppContext>
    </BrowserRouter>
  );
};

export default Router;