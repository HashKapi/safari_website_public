const GalleryPhoto = ({photoNum}) => {
    return ( 
        <div>
            <img src={`assets/g-${photoNum}.jpeg`} alt='' />
            <div className="content">
                <h3>amazing places</h3> 
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!
                </p>
                <a href="#packages" className="btn">see more</a>
            </div>
        </div>
     );
}
 
export default GalleryPhoto;