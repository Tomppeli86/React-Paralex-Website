

import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";

import bg1 from "./image/bg-1.jpeg";
import bg2 from "./image/bg-2.png";
import bg3 from "./image/bg-3.png";
import bg4 from "./image/bg-4.png";
import bg5 from "./image/bg-5.png";
import bg6 from "./image/bg-6.png";
import bg7 from "./image/bg-7.png";
import bg8 from "./image/bg-8.png";
import bg9 from "./image/bg-9.png";
import upsidebg1 from "./image/upsidebg-1.png";
import upsidebg2 from "./image/upsidebg-2.png";
import upsidebg3 from "./image/upsidebg-3.png";
import cloud1 from "./image/cloud1.png";


import "./index.css";

function App() {
  return (
    <main>
      <ParallaxProvider>
        <header>
          <ParallaxBanner
            className="banner"
            layers={[
 
              {
                image: upsidebg3,
                translateY: [-17, 50],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              {
                image: upsidebg2,
                translateY: [-25, 50],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              {
                image: upsidebg1,
                translateY: [-12, 30],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
            ]}
          />
                    <ParallaxBanner
            className="banner"
            layers={[
              {
                image: bg1,
                translateY: [-25, 22],
                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              {
                image: bg2,
                translateY: [-20, 25],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              {
                image: bg3,
                translateY: [-20, 15],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              {
                image: bg4,
                translateY: [-3, 19],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              {
                image: bg8,
                translateY: [-14, -9],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              {
                image: bg7,
                translateY: [25, -11],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              {
                image: bg6,
                translateY: [50, 3],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              {
                image: bg8,
                translateY: [50, 15],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              {
                image: bg9,
                translateY: [100, 13],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              
            ]}
          />
        </header>
      </ParallaxProvider>
      
    </main>
  );
}

export default App;
