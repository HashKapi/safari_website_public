const Contact = () => {
    return ( 
        <section className="contact" id="contact">
            <h1 className="heading">
                <span>c</span>
                <span>o</span>
                <span>n</span>
                <span>t</span>
                <span>a</span>
                <span>c</span>
                <span>t</span>
            </h1>

            <div className="row">
                <div className="image">
                    <img src="assets/contact.jpg" alt="" />
                </div>

                <form action="">
                    <div className="inputBox">
                        <input type="text" placeholder='name'/>
                        <input type="email" placeholder='email'/>
                    </div>
                    <div className="inputBox">
                        <input type="number" placeholder='number'/>
                        <input type="text" placeholder='subject'/>
                    </div>
                    <textarea name="" id="" cols="30" rows="10" placeholder='message'></textarea>
                    <input type="submit" className='btn' value='send message'/>
                </form>
            </div>
        </section>
     );
}
 
export default Contact;