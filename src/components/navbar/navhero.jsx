import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { lineReveal, hideItem } from "../../animations";

export default function Navhero () {    
    
    let nav = useRef(null);
    let line1 = useRef(null);
    let line2 = useRef(null);
    let line3 = useRef(null);
    let line4 = useRef(null);

    useEffect(()=>{

        lineReveal(line1, line2, line3, line4);
        hideItem(nav);

    }, [])
    

    return (
        <div ref={el => (nav = el)} className="absolute right-0 pt-2 mx-12 max-[960px]:hidden z-50">
            <div  className="text-right text-xl">
                <div className="relative my-1 cursor-pointer"><Link to="/">Home</Link><div ref={el => (line1 = el)} className='absolute top-0 h-full w-full z-10 bg-[#F9F7F3]'></div></div>
                <div className="relative my-1 cursor-pointer"><Link to="/about">About</Link><div ref={el => (line2 = el)} className='absolute top-0 h-full w-full z-10 bg-[#F9F7F3]'></div></div>
                <div className="relative my-1 cursor-pointer"><Link to="/work">Work</Link><div ref={el => (line3 = el)} className='absolute top-0 h-full w-full z-10 bg-[#F9F7F3]'></div></div>
                <div className="relative my-1 cursor-pointer"><Link to="/contact">Contact</Link><div ref={el => (line4 = el)} className='absolute top-0 h-full w-full z-10 bg-[#F9F7F3]'></div></div>
            </div>
        </div>
    )
}