import Package from "./Package";
const Packages = () => {
    return ( 
        <section className="packages" id="packages">
            <h1 className="heading">
                <span>p</span>
                <span>a</span>
                <span>c</span>
                <span>k</span>
                <span>a</span>
                <span>g</span>
                <span>e</span>
                <span>s</span>
            </h1>

            <div className="box-container">
                <Package picName="kilimanjaro" placeName='Kilimanjaro, Tanzania' />
                <Package picName='serengeti' placeName='Serengeti National Park, Tanzania' />
                <Package picName='zanzibar' placeName='Zanzibar, Tanzania' />
            </div>
        </section>
     );
}
 
export default Packages;