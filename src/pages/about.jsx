import { useEffect, useRef } from "react";
import { fromDivToSpan, fromDivToSpanWithSpace, picReveal, lineReveal, fadeIn, hideItem } from "../animations";

import Navhero from "../components/navbar/navhero";
import Navbar from "../components/navbar/navbar";
import Contact from "../components/contact";

export default function About() {

  let name1 = useRef(null);
  let name2 = useRef(null);
  let city1 = useRef(null);
  let city2 = useRef(null);
  let mask = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let text1 = useRef(null);
  let text2 = useRef(null);
  let text3 = useRef(null);
  let text4 = useRef(null);
  let hide1 = useRef(null);
  let hide2 = useRef(null);
  let hide3 = useRef(null);

  useEffect(()=>{

    fromDivToSpan(name1, "letter");
    fromDivToSpan(name2, "letter");
    fromDivToSpanWithSpace(city1);
    fromDivToSpanWithSpace(city2);

    hideItem(hide1);
    hideItem(hide2);
    hideItem(hide3);

    picReveal(mask);
    lineReveal(line1, line2, line3);
    fadeIn(text1, text2);
    fadeIn(text3, text4);

    window.scrollTo(0,0);  

  },[])

  return (
    <>
        <div ref={el => (hide3 = el)} className="mx-12 max-lg:mx-3">
            <Navbar/>
        </div>
        
        <div className="h-full mx-12 pt-12 tracking-tighter	max-lg:mx-3">   

            <Navhero/> 
            
            <div className="h-full w-full overflow-hidden">
                <div className="text-9xl font-semibold max-lg:text-[12vw] max-md:text-[16vw]">
                  <div ref={el => (name1 = el)} className="flex overflow-hidden">VICTOR</div>
                  <div ref={el => (name2 = el)} className="flex overflow-hidden">ALVES</div>
                </div>
                <div className="relative top-[-60px] grid grid-cols-2 h-full mx-32 max-lg:top-0 max-lg:grid-cols-1 max-lg:mx-0">
                    <div ref={el => (hide1 = el)} className="col-span-1 relative max-lg:order-2">
                        <div ref={el => (mask = el)} className='absolute top-0 h-full w-full z-10 bg-[#F9F7F3]'></div>
                        <img src='/eu.jpg' alt="eu" className="h-auto max-w-full"/>
                    </div>

                    <div ref={el => (hide2 = el)} className="text-right text-xl font-medium flex flex-col justify-center max-lg:my-6 max-lg:text-left max-lg:order-1">
                        <div className="relative"><div>I tried some stuff.</div><div ref={el => (line1 = el)} className='absolute top-0 h-full w-full z-10 bg-[#F9F7F3]'></div></div>
                        <div className="relative"><div>I learned some stuff.</div><div ref={el => (line2 = el)} className='absolute top-0 h-full w-full z-10 bg-[#F9F7F3]'></div></div>
                        <div className="relative"><div>Now I`am trying some new stuff.</div><div ref={el => (line3 = el)} className='absolute top-0 h-full w-full z-10 bg-[#F9F7F3]'></div></div>           
                    </div>
                </div>
            </div>

            <div className="mx-52 my-20 grid grid-cols-2 text-xl max-lg:grid-cols-1 max-lg:mx-0">
                <div className=""><p ref={el => (text1 = el)}>The beginning of a new journey</p></div>
                <div className="flex justify-center max-lg:justify-start max-lg:mt-6">
                    <p ref={el => (text2 = el)} className="w-6/12 max-lg:w-10/12">
                    Software developer student at FATEC, passioned about web technologies and design, full stack developer trying to explore 
                    new creative ways to bring user interfaces and creating interaction digital experiences.           
                    <br/><br/>
                    My aim is to take coding into the professional dimension where I hope to bring value and continously grow myself.
                    </p>
                </div>
            </div>

            <div>
                <div className="w-full my-16 text-9xl font-semibold max-lg:text-[10vw] max-md:text-[9vw]">
                    <div className="text-left">WEB DESIGNER</div>
                        <div className="flex justify-end max-lg:justify-start">
                            <div className="w-11/12 flex justify-between">
                                <span>&</span>   
                                <span>FRONT-END</span>
                            </div>
                        </div>        
                    <div className="text-center">DEVELOPER</div>
                </div>

                <div className="mx-52 my-20 grid grid-cols-2 text-xl max-lg:grid-cols-1 max-lg:mx-0">
                    <div className="max-lg:order-2 max-lg:w-10/12"> 
                        <p ref={el => (text3 = el)} className="w-6/12 mt-4 max-lg:w-full">
                            My ultimate goal is to empower you and your business, providing you with the digital tools necessary to thrive in todays 
                            competitive landscape.
                            <br/> <br/> 
                            By understanding your vision and objectives, Ill ensure that your digital product not only looks 
                            stunning but also delivers tangible results.
                        </p>
                    </div>
                    <div className="flex justify-center max-lg:order-1 max-lg:justify-start">
                        <p ref={el => (text4 = el)} className="w-5/12 text-right max-lg:text-left max-lg:w-full">
                            Empowering Digital Growth
                        </p>          
                    </div>
                </div>
 
                <div className="w-full flex flex-col items-center max-lg:items-start">
                    <img src="/sp.jpg" alt="spcity" className="h-auto max-w-full"/>
                    <div className="text-8xl max-lg:text-[12vw] font-semibold  mt-16">
                        <div ref={el => (city1 = el)} className="flex overflow-hidden">BASED IN</div>
                        <div ref={el => (city2 = el)} className="flex overflow-hidden">SAO PAULO</div>
                    </div>
                </div>
            </div>

            <Contact/>

        </div>
    </>
  )
}
