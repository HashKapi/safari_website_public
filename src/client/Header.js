import { useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import Nav from "./Nav";
import { isMobile } from "react-device-detect";
const Header = () => {
    const location = useLocation()
    const currentRoute = location.pathname
    const renderNav = currentRoute === '/' ? true : false

    const [isActive, setIsActive] = useState(false)
    const [toggleForm, setToggleForm] = useState(false)

    const [menuBar, setMenuBar] = useState(false)

    //login variables
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginStatus, setLoginStatus] = useState(false)
    const [userName, setUsername] = useState('')
    const logOut = () => {
        setLoginStatus(false)
        setUsername('')
        setEmail('')
        setPassword('')
    }

    const toggleButton = () => {
        setIsActive(!isActive)
    }

    console.log(window.screen.height)
    window.onscroll = () => {
        setIsActive(false)
        setMenuBar(false)
        if (!isMobile){
            setToggleForm(false)
        }
    }

    const openForm = () => {
        setToggleForm(!toggleForm)
    }

    const toggleMenuBar = () => {
        setMenuBar(!menuBar)
    }

    return ( 
        <div>
            <header>
                <div id='menu-bar' className={menuBar ? 'fas fa-times' : "fas fa-bars"} onClick={toggleMenuBar}></div>

                <a href="#home" className="logo">
                    <span>S</span>afari
                </a>

                {renderNav && <Nav menuBar={menuBar} />}
                {!renderNav && 
                    <nav className='navbar'>
                        <Link to='/'>Back to homepage</Link>
                    </nav>
                }
                
                {renderNav && 
                    <div className="icons">
                        <i id='search-btn' className={isActive ? 'fas fa-times' : 'fas fa-search'} onClick={toggleButton}></i>
                        <i className='fas fa-user' id='login-btn' onClick={openForm}></i>
                        {loginStatus && <h3>{`Welcome, ${userName}!`}</h3>}
                        {loginStatus && <button onClick={logOut}>log out</button>}
                    </div> 
                }

                <form action="" className={`search-bar-container ${isActive ? 'active':''}`}>
                    <input type="search" id='search-bar' placeholder='search here...'/>
                    <label htmlFor="search-bar" className='fas fa-search'></label>
                </form>
            </header>
            <LoginForm 
                toggleForm={toggleForm}
                setToggleForm={setToggleForm}
                openForm={openForm} 
                loginStatus={loginStatus} 
                setLoginStatus={setLoginStatus}
                setUsername={setUsername}
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
            />
        </div>
     );
}
 
export default Header;