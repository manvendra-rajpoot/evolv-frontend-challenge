import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    const location = useLocation();

    return (
        <div className='header'>
            <Link to='/'>
                <span id="appTitle">Food Quota</span>
            </Link>
            <div>
                {location.pathname === '/admin'
                    ? 
                    <div className="controlBtn">
                        <Link to='/'>
                            <button id="backToHomeBtn">Back to Home</button>
                        </Link>
                    </div>
                    :
                    <div className="controlBtn">
                        <Link to='/admin'>
                            <button id="goToAdminDashBtn">Go to Admin Dashboard</button>
                        </Link>
                        {location.pathname === '/' 
                            ?
                            <div className="h">
                                <button id="logInBtn">Login</button>
                                <button id="logOutBtn">Logout</button>
                            </div>
                            :
                            <></>
                        }
                    </div>
                }                
            </div>
        </div>
    )
}

export default Header;
