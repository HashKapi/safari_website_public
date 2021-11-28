import Booking from "./Booking";
import Packages from "./packages/Packages";
import Services from "./services/Services";
import Gallery from "./gallery/Gallery";
import Contact from "./Contact";

import {useState} from "react";


const Home = () => {
    const colorDict = {
        'b1': false,
        'b2': false,
        'b3': false,
        'b4': false
    }

    const [bState, setBState] = useState({...colorDict, 'b1': true})
    const [vidNum, setVidNum] = useState('1')

    const toggleColor = (bName) => {
        setVidNum(bName[1])
        setBState(({
            ...colorDict,
            [bName]: true
        }))

        
        
    }
    

    return ( 
        <div>
            <section className="home" id='home'>
                <div className="content">
                    <h3>Karibu Tanzania!</h3>
                    <p>discover new places with us, adventure awaits</p>
                    <a href="#packages" className="btn">discover more</a>
                
                </div>

                <div className="controls">
                    <span 
                        className={`vid-btn ${bState.b1 ? 'active':''}`} 
                        data-src='assets/a1.mp4' 
                        onClick={() => toggleColor('b1')}
                    ></span>
                    <span 
                        className={`vid-btn ${bState.b2 ? 'active':''}`} 
                        data-src='assets/a2.mp4' 
                        onClick={() => toggleColor('b2')}
                    ></span>
                    <span 
                        className={`vid-btn ${bState.b3 ? 'active':''}`} 
                        data-src='assets/a3.mp4' 
                        onClick={() => toggleColor('b3')}
                    ></span>
                    <span 
                        className={`vid-btn ${bState.b4 ? 'active':''}`} 
                        data-src='assets/a4.mp4' 
                        onClick={() => toggleColor('b4')}
                    ></span>
                </div>

                <div className="video-container">
                    <video src={`assets/a${vidNum}.mp4`} id='video-slider' autoPlay loop muted playsInline></video>
                </div>
                
            </section>
            <Booking />
            <Packages />
            <Services />
            <Gallery />
            <Contact />
        </div>
     );
}
 
export default Home;