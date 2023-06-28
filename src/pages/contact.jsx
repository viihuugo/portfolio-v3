import { useEffect, useRef } from "react";
import { fromDivToSpan, fadeIn } from "../animations";
import { Link } from "react-router-dom";

export default function Contact() {

    let email1 = useRef(null);
    let email2 = useRef(null);
    let social1 = useRef(null);
    let social2 = useRef(null);
    let footer = useRef(null);
    let links = useRef(null);

    useEffect(()=>{

        fromDivToSpan(email1, "letter");
        fromDivToSpan(email2, "letter");

        fadeIn(links)
        fadeIn(social1, social2);
        fadeIn(footer);

        window.scrollTo(0,0);

    },[])

  return (
    <>
       
        <div className="w-screen h-screen bg-[#0F0F0F] text-white">
            <div className="h-full flex flex-col justify-between">
                <div  ref={el => (links = el)} className="mx-12 mt-12 flex justify-between max-lg:mx-3">
                    <div className="text-2xl text-white font-semibold"><Link to='/'>VICTOR ALVES</Link></div>
                    <div className="text-xl text-white font-semibold flex max-sm:flex-col">
                        <div className="mx-4 max-sm:my-1"><Link to='/'>HOME</Link></div>
                        <div className="mx-4 max-sm:my-1"><Link to='/about'>ABOUT</Link></div>
                        <div className="mx-4 max-sm:my-1"><Link to='/work'>WORK</Link></div>
                    </div>
                </div>

                <div className="">
                    <div className="text-7xl max-lg:text-[8vw] max-md:text-[9vw] font-medium">
                        <div  ref={el => (email1 = el)} className="flex justify-center overflow-hidden underline">HELLO@VICTOR</div>
                        <div  ref={el => (email2 = el)} className="flex justify-center overflow-hidden underline">HUGOALVES.COM</div>
                    </div>
                    <div className="mt-12 flex justify-center text-3xl max-[450px]:text-2xl font-semibold">
                        <div ref={el => (social1 = el)} className="mr-8"><a href="https://www.linkedin.com/in/victorhugoalves/">LINKEDIN</a></div>
                        <div ref={el => (social2 = el)} className="ml-8"><a href="https://github.com/viihuugo">GITHUB</a></div>
                    </div>
                </div>

                <div ref={el => (footer = el)} className="mb-6 text-xl max-lg:text-base font-semibold flex justify-center">
                    <p className="w-2/6 text-center max-lg:w-9/12">CREATED FOR, DESIGNED BY, AND DEVELOPED BY VICTOR ALVES IN 2023</p>
                </div>
            </div>
        </div>
    </>
    
  )
}
