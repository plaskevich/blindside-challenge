import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';
import VideoBrowser from './components/VideoBrowser';
import Video from './components/Video';
import Login from './components/Login';

const isAuthenticated = () => {
  if (localStorage.getItem('token')) {
    return true;
  } else {
    return false;
  }
};

const clientId =
  '247551496272-vtphb4deppf25ojfk3h9no9pi6htjfnb.apps.googleusercontent.com';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId={clientId}>
      <Routes>
        <Route
          path='/'
          element={isAuthenticated() ? <VideoBrowser /> : <Login />}
        />
        <Route
          path='/video/:videoID'
          element={isAuthenticated() ? <Video /> : <Login />}
        />
        <Route
          path='/login'
          element={isAuthenticated() ? <VideoBrowser /> : <Login />}
        />
      </Routes>
    </GoogleOAuthProvider>
  </BrowserRouter>
);
