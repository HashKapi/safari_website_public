const Nav = ({menuBar}) => {
    return ( 
        <nav className={`navbar ${menuBar ? 'active': ''}`}>
            <a href="#home">home</a>
            <a href="#book">book</a>
            <a href="#packages">packages</a>
            <a href="#services">services</a>
            <a href="#gallery">gallery</a>
            <a href="#contact">contact</a>
        </nav>
     );
}
 
export default Nav;