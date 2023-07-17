import { useEffect, useRef, useState } from "react"
import { fromDivToSpan, fadeIn, fadeInHero, scrollDownIcon, staggerReveal, hideItem, showContent } from "../animations"

import Projects from "../components/projects";
import Contact from "../components/contact";

import { Link } from "react-router-dom";

import Navhero from "../components/navbar/navhero"
import Navbar from "../components/navbar/navbar"

import LandingReveal from "../components/landingreveal";

export default function Home() {

    let reveal1 = useRef(null);
    let reveal2 = useRef(null);
    let reveal3 = useRef(null);
    let text1 = useRef(null);
    let text2 = useRef(null);
    let line1 = useRef(null);
    let line2 = useRef(null);
    let line3 = useRef(null);
    let line4 = useRef(null);
    let info = useRef(null);
    let hide = useRef(null);

    const [loading, setLoading] = useState(false); 
  
    useEffect(()=>{
      
      fadeInHero(info);
      scrollDownIcon();
  
      fromDivToSpan(line1, "letter");
      fromDivToSpan(line2, "letter");
      fromDivToSpan(line3, "letter");
      fromDivToSpan(line4, "letter"); 

      staggerReveal(reveal1, reveal2, reveal3);
      fadeIn(text1, text2);

      hideItem(hide);
      showContent();

      window.scrollTo(0,0);  

    },[loading])


  return (
    <div className="h-full mx-12 tracking-tighter	max-lg:mx-3">       
        <LandingReveal setLoading={setLoading}/>
        <div className="content opacity-0">
          <Navbar/>        

        <div className="relative h-[680px] w-full pt-12 max-[960px]:flex max-[960px]:flex-col max-[960px]:justify-between max-[480px]:h-[600px]">
            
          <Navhero/>  
      
            <div className="h-3/6 max-[960px]:h-auto max-[960px]:mt-8 uppercase text-9xl max-lg:text-[12vw] font-syne font-semibold">
              <div ref={el => (line1 = el)} className="leading-[110px] max-lg:leading-none flex overflow-hidden">Creative</div>
              <div ref={el => (line2 = el)} className="leading-[110px] max-lg:leading-none flex overflow-hidden">developer</div>
            </div>
            
            <div className="h-3/6 w-full flex justify-between max-[960px]:h-3/6 min-h-[400px]">
              <div ref={el => (info = el)} className="max-w-[15vw] max-[960px]:max-w-[50vw] pl-2 font-medium leading-tight">I CREATE DIGITAL PRODUCTS USING CODING AND INTERACTIVE DESIGN TO REALIZE IDEIAS</div> 
              <div className="text-9xl max-lg:text-[12vw] font-medium flex items-end">
                <div className="text-right font-semibold">
                  <div ref={el => (line3 = el)} className="leading-[110px] max-lg:leading-none flex overflow-hidden">VICTOR</div>
                  <div ref={el => (line4 = el)} className="leading-[110px] max-lg:leading-none flex justify-end overflow-hidden">ALVES</div>
                </div>            
              </div>          
            </div>

              {/* Scroll Down Circle Effect */}
            <div className="absolute bottom-0 left-0 w-[100px] max-[960px]:hidden">
                <div className="flex justify-center items-center">
                  <div className="scrollDown">
                    <svg viewBox="0 0 100 100" width="100" height="100">
                      <defs>
                        <path
                          id="circle"
                          d="
                            M 50, 50
                            m -37, 0
                            a 37,37 0 1,1 74,0
                            a 37,37 0 1,1 -74,0"
                        />
                      </defs>
                      <text>
                        <textPath xlinkHref="#circle">
                            Scroll Down Scroll Down Scroll Down
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </div>
            </div>
        </div>
        

        {/* About Section */}
        <div className="mt-[200px] max-lg:mt-[100px] overflow-hidden">
        <div className="w-full text-9xl max-lg:text-[12vw] font-semibold text-center">
            <div ref={el => (reveal1 = el)}>SHORTLY</div>
            <div ref={el => (reveal2 = el)}>ABOUT</div>
            <div ref={el => (reveal3 = el)}>MYSELF</div>
        </div>
        <div className="w-full grid grid-cols-2 text-xl mt-24 max-lg:flex max-[960px]:flex-col max-[960px]:w-auto">
            <div ref={el => (text1 = el)} className="flex justify-center"><p className="w-3/12  max-[960px]:w-full">The combination of code & design</p></div>
            <div ref={el => (text2 = el)} className="w-5/12 max-[960px]:w-full max-[960px]:mt-8">
            <p>
              Software developer student passioned about web technologies and design, full stack developer 
              trying to explore new creative ways to bring user interfaces and creating interaction digital experiences.
            </p>
            <div className="font-bold mt-8 flex">   
              <Link className="flex" to="/about">            
                <div className="pr-2">More about me</div>
                <div className="flex items-center"><svg className="rotate-[-90deg]" width="15" height="13" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M20 100V90H82.95L0 7.05L7.05 0L90 82.95V20H100V100H20Z"></path></svg></div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div>
        <div className="w-full grid grid-cols-2 mt-[150px] max-[960px]:grid-cols-1">
          <div className="text-8xl max-[960px]:text-[12vw] font-semibold">
            <div>STUFF</div>
            <div className="text-center">I HAVE</div>
            <div>DONE</div>
          </div>
          <div className="text-center font-semibold flex justify-center items-center max-[960px]:mt-6">CREATIVE CONTENT</div>
        </div>      
      </div>
      <Projects/>

      {/* Contact Section */}
      <Contact/>


      </div>

    </div>
  )
}
