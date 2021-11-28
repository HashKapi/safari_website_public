import Service from "./Service";
const Services = () => {
    return ( 
        <section className="services" id="services">
            <h1 className="heading">
                <span>s</span>
                <span>e</span>
                <span>r</span>
                <span>v</span>
                <span>i</span>
                <span>c</span>
                <span>e</span>
                <span>s</span>
            </h1>

            <div className="box-container">
                <Service iconClass='fa-hotel' serviceTitle='affordable hotels'/>
                <Service iconClass='fa-utensils' serviceTitle='food and drinks' />
                <Service iconClass='fa-bullhorn' serviceTitle='safety guide' />
                <Service iconClass='fa-globe-asia' serviceTitle='around the world' />
                <Service iconClass='fa-plane' serviceTitle='fastest travel' />
                <Service iconClass='fa-hiking' serviceTitle='adventures' />
            </div>
        </section>
     );
}
 
export default Services;