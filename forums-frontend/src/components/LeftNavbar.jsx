import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import { Link } from 'react-router-dom';
// import './Navbar.css';
import { IconContext } from 'react-icons';

const LeftNavbarContainer = styled.div`
    display: flex;
    .navbar {
        height: 80px;
        display: flex;
        justify-content: start;
        align-items: center;
        font-family: 'Lato', sans-serif;
    }

    .menu-bars {
        margin-left: 2rem;
        font-size: 1.5rem;
        background: none;
    }

    .nav-menu {
        background-color: #060b26;
        width: 250px;
        height: 100vh;
        display: flex;
        justify-content: center;
        position: fixed;
        top: 0;
        left: -100%;
        transition: 850ms;
    }

    .nav-menu.active {
        left: 0;
        transition: 350ms;
    }

    .nav-text {
        display: flex;
        justify-content: start;
        align-items: center;
        padding: 8px 0px 8px 16px;
        list-style: none;
        height: 60px;
    }

    .nav-text a {
        text-decoration: none;
        color: #f5f5f5;
        font-size: 18px;
        width: 95%;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 16px;
        border-radius: 4px;
    }

    .nav-text a:hover {
        background-color: #1a83ff;
    }

    .nav-menu-items {
        width: 100%;
    }

    .navbar-toggle {
        background-color: #060b26;
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: start;
        align-items: center;
    }

    span {
        margin-left: 16px;
    }

    .userInfo {
        color: white;
        margin-bottom: 3rem;
        background-color: #00459473;
        padding: 1rem;
        li {
            list-style: none;
        }
        .userIcon{
            font-size: 3rem;
        }
        .userNames {
            margin-top: 1rem;
        }
    }
`

const LeftNavbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const [user, setUser] = useState({});
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')));
    }, []);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <LeftNavbarContainer>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items'>
                        <li className='navbar-toggle' onClick={showSidebar}>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        <li>
                            <div className='userInfo'>
                                <ul>
                                    <li>
                                        <FaIcons.FaUserCircle className='userIcon' />
                                        <div className='userNames'>
                                            {user?.firstName}{" "}
                                            {user?.lastName}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className='nav-text'>
                            <Link to='/'>
                                <FaIcons.FaHome />
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className='nav-text'>
                            <Link to='/reservations'>
                                <FaIcons.FaConciergeBell />
                                <span>Reservations</span>
                            </Link>
                        </li>
                        <li className='nav-text'>
                            <Link to='/logout'>
                                <BiIcons.BiLogIn />
                                <span>Log Out</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </IconContext.Provider>
        </LeftNavbarContainer>
    );
}

export default LeftNavbar