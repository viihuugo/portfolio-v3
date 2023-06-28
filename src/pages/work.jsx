import { useEffect, useRef } from "react";

import Projects from "../components/projects";
import Contact from "../components/contact";
import Navhero from "../components/navbar/navhero"
import Navbar from "../components/navbar/navbar"

import { fromDivToSpan, fadeIn, hideItem } from "../animations";

export default function Work() {

  let title = useRef(null);
  let subtitle = useRef(null);
  let hide = useRef(null);

  useEffect(() => {
   
    fromDivToSpan(title, "letter");
    fadeIn(subtitle);
    hideItem(hide);

    window.scrollTo(0,0);
    
  }, [])

  
  return (
    <>
      <div ref={el => (hide = el)} className="mx-12 max-lg:mx-3">
        <Navbar/>
      </div>

      <div className="h-full mx-12 pt-12 tracking-tighter	max-lg:mx-3">   

        <Navhero/>   

        <div className="h-screen ml-[10vw] max-lg:ml-0 flex items-center">
          <div>
            <div ref={el => (title = el)} className="text-8xl max-[960px]:text-[12vw] font-semibold flex overflow-hidden">PROJECTS</div> 
            <div ref={el => (subtitle = el)} className="text-2xl mt-2 max-[960px]:mt-4">
              <p>A set of projects I&apos;ve build.</p>
              <p>The combination of my passion for design, code & interaction.</p>        
            </div>
          </div>
        </div>

        <Projects/>

        <Contact/>  
      </div>
    </>
  )
}
