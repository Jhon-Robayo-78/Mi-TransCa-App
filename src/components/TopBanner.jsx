import React from 'react';
import './css/banner.css';
import { useLocation, Link } from 'react-router-dom';

function TopBanner() {
  const location = useLocation();

  return (
    <div className="banner">
        <Link to='/'>
          <img id="bannerLogo" src="img/logoblanco.png"></img>
        </Link>
        {location.pathname === '/' && 
        <div className="bannerText">
          <div className="saldo">
            <h2>Tu saldo</h2>
            <h1>$ 28000</h1>
            <h2>9 pasajes</h2>
          </div>
        </div>
        }

        {location.pathname === '/routes' && 
        <div className="bannerText">
          <img className="bannerIcon" src="/routesBannerIcon.svg"/>
            <h1>RUTAS</h1>
            <h1>Transcaribe</h1>
        </div>
        }

        {location.pathname === '/UserView' && 
        <div className="bannerText">
          <img className="bannerIcon" src="/accountBannerIcon.svg"/>
          <h1>Tu cuenta</h1>
          <h1>Transcaribe</h1>
        </div>
        }
    </div>
  );
}

export default TopBanner;