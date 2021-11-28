const Footer = () => {
    return ( 
        <section className="footer">
            <div className="box-container">
                <div className="box">
                    <h3>about us</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                <div className="box">
                    <h3>branch locations</h3>
                    <a href="#home">Japan</a>
                    <a href="#home">Canada</a>
                    <a href="#packages">Tanzania</a>
                    <a href="#home">Netherlands</a>
                </div>

                <div className="box">
                    <h3>quick links</h3>
                    <a href="#home">home</a>
                    <a href="#book">book</a>
                    <a href="#packages">packages</a>
                    <a href="#services">services</a>
                    <a href="#gallery">gallery</a>
                    <a href="#review">review</a>
                    <a href="#contact">contact</a>
                </div>

                <div className="box">
                    <h3>follow us</h3>
                    <a href="https://www.facebook.com/">facebook</a>
                    <a href="https://www.instagram.com/">instagram</a>
                    <a href="https://twitter.com/?lang=en">twitter</a>
                    <a href="https://ca.linkedin.com/">linkedin</a>
                </div>
            </div>

            <h1 className="credit"> created by <span>Hash</span> | all rights reserved!</h1>
        </section>
     );
}
 
export default Footer;