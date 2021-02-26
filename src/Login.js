import React from 'react';
import './Login.css';
import { loginUrl } from './spotify';

function Login() {
    return (
        <div className="login"> 
        
        <img  src= "https://download.logo.wine/logo/Spotify/Spotify-White-Logo.wine.png" alt=""/>
        
        <a href={loginUrl}>LOGIN TO SPOTIFY</a>
            
        </div>
    )
}

export default Login;
