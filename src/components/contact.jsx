import { useEffect, useRef } from "react";

import { fromDivToSpan } from "../animations";

export default function Contact() {

    let email1 = useRef(null);
    let email2 = useRef(null);

    useEffect(()=>{

        fromDivToSpan(email1, "letter");
        fromDivToSpan(email2, "letter");

    },[])  
    
  return (
    <>
      <div className="h-screen max-sm:h-full w-full mt-[100px] flex flex-col justify-between py-6 overflow-hidden">
        <div className="font-medium flex justify-around max-[660px]:justify-between">
          <div>WANT TO WORK TOGETHER?</div>
          <div>SEND ME A MESSAGE</div>
        </div>

        <div className="text-8xl max-lg:text-[10vw] max-md:text-[9vw] font-semibold max-sm:my-32">
          <div  ref={el => (email1 = el)} className="flex overflow-hidden">HELLO@VICTOR</div>
          <div  ref={el => (email2 = el)} className="flex overflow-hidden">HUGOALVES.COM</div>
        </div>

        <div className="font-semibold flex justify-between max-sm:flex-col">
          <div className="max-sm:py-2">
            <div>VICTOR ALVES</div>
            <div>CREATIVE DEVELOPER</div>
          </div>
          <div className="flex items-end max-sm:py-2">
            <span className="pr-1 max-sm:mr-4"><a href="https://www.linkedin.com/in/victorhugoalves/">LINKEDIN,</a></span>
            <span><a href="https://github.com/viihuugo">GITHUB</a></span>
          </div>
          <div className="max-sm:py-2">
            <div>DEVELOPED BY</div>
            <div>VICTOR ALVES IN 2023</div>
          </div>
        </div>
      </div>
    </>
  )
}
