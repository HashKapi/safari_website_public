const Package = ({picName, placeName}) => {
    return ( 
        <div className="box">
            <img src={`assets/${picName}.jpg`} alt="" />
            <div className="content">
                <h3>
                    <i className="fas fa-map-marker-alt"></i>
                    {placeName}
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <div className="price"> $90.00 <span>$120.00</span> </div>
                <a href="#book" className="btn">book now</a>
            </div>
        </div>
     );
}
 
export default Package;