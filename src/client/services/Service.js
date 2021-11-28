const Service = ({iconClass, serviceTitle}) => {
    return ( 
        <div className="box">
            <i className={`fas ${iconClass}`}></i>
            <h3>{serviceTitle}</h3> 
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!
            </p>
        </div>
     );
}
 
export default Service;