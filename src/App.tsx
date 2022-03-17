import React, {useRef} from 'react';
import { Parallax, ParallaxLayer,IParallax } from '@react-spring/parallax';

import './App.css';

function App() {

  const parallax = useRef<IParallax>(null!)

  const ref = useRef()

  return (
    <div className="App" style={{ width: '100%', height: '100%'}}>
      <Parallax ref={parallax} pages={6} style={{ top: '0', left: '0', background:'black' }}>

        <ParallaxLayer offset={0} speed={0} 
          style={{ backgroundImage: 
            `url("https://www.nasa.gov/sites/default/files/thumbnails/image/pia22946-16.jpg")`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
         }}
        />

        <ParallaxLayer
          offset={0}
          speed={1}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}>
          <h1>Jupiter</h1>
        </ParallaxLayer>
        
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            color: 'white',
          }}>
          <h2>NASA’s Juno mission captured this look at the southern hemisphere of Jupiter on Feb. 17, 2020.</h2>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={1} 
          speed={0} 
          style={{ backgroundImage: 
            `url("https://www.nasa.gov/sites/default/files/thumbnails/image/junocam_jupiter_moons.jpg")`,
          backgroundSize: 'cover', }}
        />
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}>
          <h1>NASA’s Juno Spacecraft Glimpses Jupiter’s Moons Io and Europa.</h1>
        </ParallaxLayer>
        
        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            color: 'white',
          }}>
          <h2 > Striking atmospheric features in Jupiter’s northern hemisphere are captured in this series of color-enhanced images from NASA’s Juno spacecraft. </h2>
        </ParallaxLayer>
        

        <ParallaxLayer 
          offset={2} 
          speed={0} 
          style={{ backgroundImage: 
            ``,
            backgroundSize: 'contain',
            backgroundPosition: 'bottom'
          }} 
        />
        
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}>
          <h1>Churning Texture in Jupiter’s Atmosphere</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            color: 'white',
          }}>
          <h2 >NASA’s Juno mission captured these elaborate atmospheric jets in Jupiter's northern mid-latitude region.</h2>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={3} 
          speed={1} 
          style={{ backgroundImage: 
            `url("https://www.nasa.gov/sites/default/files/thumbnails/image/pia22949.jpg`,
            backgroundSize: 'contain',
            backgroundPosition: 'right',
          }} 
        /> 

        <ParallaxLayer
          offset={3}
          speed={1.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}>
          <h1>Tumultuous Clouds of Jupiter</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={1.0}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            color: 'white',
          }}>
          <h1 style={{maxWidth: '990px'}}>This stunning image of Jupiter's stormy northern hemisphere was captured by NASA's Juno spacecraft as it performed a close pass of the gas giant planet.</h1>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={4} 
          speed={0} 
          style={{ backgroundImage: 
            `url("https://www.nasa.gov/sites/default/files/thumbnails/image/pia23801.jpg")`,
            backgroundSize: 'contain', }} 
            
        />
        
        <ParallaxLayer
          offset={4}
          speed={1}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}>
          <h1>Jupiter Marble</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={0.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            color: 'white',
          }}>
          <h2 style={{maxWidth: '990px'}} >This striking view of Jupiter’s Great Red Spot and turbulent southern hemisphere was captured by NASA’s Juno spacecraft as it performed a close pass of the gas giant planet.</h2>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={5} 
          speed={0} 
          style={{ backgroundImage: 
            `url("https://www.nasa.gov/sites/default/files/thumbnails/image/pia22950-1041.jpg")`,
            backgroundSize: 'contain',
            backgroundPosition: 'bottom' }} 
        />
        <ParallaxLayer
          offset={5}
          speed={1.0}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}>
          <h1>Storm on the Horizon</h1>
        </ParallaxLayer> 
      </Parallax>
    </div>
  );
}

export default App;
