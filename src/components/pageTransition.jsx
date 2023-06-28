import { useEffect, useRef } from "react";
import { pageTransition } from "../animations";

export default function PageTransition() {

    let background = useRef(null);
    let background2 = useRef(null);

    useEffect(() => {
        
        pageTransition(background, background2);
    
    }, [])    

  return (
    <>
        <div ref={el => (background = el)} className="h-full w-full bg-black fixed top-0 left-0 right-0 bottom-0 z-[-1]"></div>
        <div ref={el => (background2 = el)} className="h-full w-full bg-[#F9F7F3] fixed top-0 left-0 right-0 bottom-0 z-[-1]"></div>
    </>
  )
}
