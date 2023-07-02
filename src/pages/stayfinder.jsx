import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { fadeDown, fadeInProject, picRevealProject } from "../animations";

export default function StayFinder() {  

  let title1 = useRef(null);
  let content1 = useRef(null);
  let title2 = useRef(null);
  let content2 = useRef(null);
  let mask = useRef(null);

  useEffect(()=>{
    picRevealProject(mask);
    fadeDown();
    fadeInProject(title1, content1);
    fadeInProject(title2, content2);
    window.scrollTo(0,0);
    
  },[])

  return (
    <div className="h-full bg-[#535E5A]">
      <div className="text-white flex justify-between px-12 pt-8 font-semibold sticky top-0 max-lg:px-3 max-sm:flex-col max-sm:pt-4">
        <div className="projectNav max-sm:py-1">Design & Development</div>
        <div className="projectNav flex max-sm:py-1">
          <div className="pr-2"><a href="https://stayfinder.vercel.app/">Visit Website</a></div>
          <div className="flex items-center"><svg className="rotate-[-90deg] fill-white" width="15" height="13" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M20 100V90H82.95L0 7.05L7.05 0L90 82.95V20H100V100H20Z"></path></svg></div>
        </div>
        <div className="projectNav max-sm:py-1">Stay Finder</div>
        <div className="projectNav max-sm:absolute max-sm:right-3"><Link to="/work">Projects</Link></div>
      </div>


      <div className="h-full px-12 sticky top-28 max-lg:px-3">
        <div className="mt-16 max-lg:mt-4">
          <div className="">
            <div ref={el => (title1 = el)} className="text-2xl text-[#423E3E] font-semibold max-sm:text-xl">PROJECT CONCEPT</div>
            <div ref={el => (content1 = el)} className="text-2xl text-white w-5/6 mt-4 font-semibold max-lg:w-full max-sm:text-xl">
              <p>StayFinder is a home-sharing platform for short-term rentals.</p>
              <br />
              <p>With its sleek Tailwind design, StayFinder offers a user-friendly interface that allows you to seamlessly navigate through a wide range of listings.</p>
              <br />
              <p>Discover your perfect home away from home with StayFinder, where convenience, reliability, and peace of mind meet.</p>
            </div>
          </div>
          <div className="mt-16 max-lg:mt-4">
            <div ref={el => (title2 = el)} className="text-2xl text-[#423E3E] font-semibold max-sm:text-xl">TECH FEATURED</div>
            <div ref={el => (content2 = el)} className="text-2xl text-white mt-4 font-semibold max-sm:text-xl">
              <div>Next JS</div>
              <div>Typescript</div>
              <div>Tailwind CSS</div>
              <div>MongoDB</div>              
              <div>Prisma</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 pb-8 z-10 relative">
        <div ref={el => (mask = el)} className='absolute top-0 h-full w-full z-10 bg-[#535E5A]'></div>
        <div className="my-12 mx-12 relative h-full max-lg:mx-3 max-sm:my-4"><img className="rounded-lg" src='/stayfinderhome.png' alt="stayfinderhome"/></div>
        <div className="my-12 mx-12 relative h-full max-lg:mx-3 max-sm:my-4"><img className="rounded-lg" src='/stayfindersignup.png' alt="stayfindersignup"/></div>
        <div className="my-12 mx-12 relative h-full max-lg:mx-3 max-sm:my-4"><img className="rounded-lg" src='/stayfinderlisting.png' alt="stayfinderlisiting"/></div>
        <div className="my-12 mx-12 relative h-full max-lg:mx-3 max-sm:my-4"><img className="rounded-lg" src='/stayfinderlisting2.png' alt="stayfinderlisiting2"/></div>
      </div>
      
    </div>
  )
}
