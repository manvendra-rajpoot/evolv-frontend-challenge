import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    const location = useLocation();
    const appName = 'evolv-frontend-challenge';

    return (
        <div className='header'>
            <Link to={`/${appName}/`}>
                <span id="appTitle">Food Quota</span>
            </Link>
            <div>
                {location.pathname === `/${appName}/admin`
                    ? 
                    <div className="controlBtn">
                        <Link to={`/${appName}`}>
                            <button id="backToHomeBtn">Back to Home</button>
                        </Link>
                    </div>
                    :
                    <div className="controlBtn">
                        <Link to={`/${appName}/admin`}>
                            <button id="goToAdminDashBtn">Go to Admin Dashboard</button>
                        </Link>
                        {location.pathname !== `/${appName}/`
                            ?
                            <></>
                            :
                            <div>
                                <button id="logInBtn">Login</button>
                                <button id="logOutBtn">Logout</button>
                            </div>
                        }
                    </div>
                    
                }                
            </div>
        </div>
    )
}

export default Header;
