import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { fromDivToSpan, fadeIn } from "../animations";

export default function Projects() {    
    
    let line1 = useRef(null);
    let line2 = useRef(null);
    let line3 = useRef(null);
    let line4 = useRef(null);
    let info1 = useRef(null);
    let info2 = useRef(null);

    useEffect(()=>{

      fromDivToSpan(line1, "letter");
      fromDivToSpan(line2, "letter");
      fromDivToSpan(line3, "letter");
      fromDivToSpan(line4, "letter");

      fadeIn(info1);
      fadeIn(info2);

  },[])


  return (
    <>
        <div className="w-full grid grid-cols-2 mt-24 max-[960px]:grid-cols-1 max-[960px]:mt-12">
            <div>
                <div className="sticky top-16">
                    <div >
                      <Link  to='/work/autisocial'>
                      <h1 ref={el => (line1 = el)} className="text-8xl max-lg:text-7xl max-[960px]:text-[12vw] font-semibold flex overflow-hidden">AUTI</h1>
                      <h1 ref={el => (line2 = el)} className="text-8xl max-lg:text-7xl max-[960px]:text-[12vw] font-semibold flex overflow-hidden">SOCIAL</h1>
                      </Link>
                    </div>
                    <div ref={el => (info1 = el)} className="text-2xl flex justify-center pt-[150px]  max-[960px]:py-8 max-[960px]:justify-start"><p className="w-3/12 max-[960px]:w-10/12">A WEBSITE IN SUPPORT OF RAISING AUTISM AWARENESS</p></div>
                </div>
            </div>
          
            <div className="h-[700px]  max-[960px]:h-[400px] w-full ">
              <div className="h-full w-full relative">
                <Link to='/work/autisocial'>
                  <img src='/autisocial.png' alt="autisocial" className="h-full object-fill"/>
                </Link>
              </div>
            </div>
        </div>

        <div className="w-full grid grid-cols-2 mt-24 max-[960px]:grid-cols-1">
            <div>
                <div className="sticky top-16">
                    <div >
                      <Link to='/work/cryptostats'>
                      <h1 ref={el => (line3 = el)} className="text-8xl max-lg:text-7xl max-[960px]:text-[12vw] font-semibold flex overflow-hidden">CRYPTO</h1>
                      <h1 ref={el => (line4 = el)} className="text-8xl max-lg:text-7xl max-[960px]:text-[12vw] font-semibold flex overflow-hidden">STATS</h1>
                      </Link>
                    </div>
                    <div ref={el => (info2 = el)} className="text-2xl flex justify-center pt-[150px] max-[960px]:py-8 max-[960px]:justify-start"><p className="w-3/12 max-[960px]:w-10/12">AN ANALYSIS TOOL FOR CRYPTO USERS</p></div>
                </div>
            </div>
            <div className="h-[700px] max-[960px]:h-[400px] w-full ">
              <div className="h-full w-full relative">
                <Link to='/work/cryptostats'>
                  <img src='/crypto2.png' alt="cryptostats" className="h-full object-fill"/>
                </Link>
              </div>
            </div>
        </div>

        <div className="w-full grid grid-cols-2 mt-24 max-[960px]:grid-cols-1">
            <div>
                <div className="sticky top-16">
                    <div >
                      <Link to='/work/stayfinder'>
                      <h1 ref={el => (line3 = el)} className="text-8xl max-lg:text-7xl max-[960px]:text-[12vw] font-semibold flex overflow-hidden">STAY</h1>
                      <h1 ref={el => (line4 = el)} className="text-8xl max-lg:text-7xl max-[960px]:text-[12vw] font-semibold flex overflow-hidden">FINDER</h1>
                      </Link>
                    </div>
                    <div ref={el => (info2 = el)} className="text-2xl flex justify-center pt-[150px] max-[960px]:py-8 max-[960px]:justify-start"><p className="w-3/12 max-[960px]:w-10/12 uppercase">Home-sharing platform for short-term rentals</p></div>
                </div>
            </div>
            <div className="h-[700px] max-[960px]:h-[400px] w-full ">
              <div className="h-full w-full relative">
                <Link to='/work/stayfinder'>
                  <img src='/stayfinder.png' alt="stayfinder" className="h-full object-fill"/>
                </Link>
              </div>
            </div>
        </div>
    </> 

  )
}

 
//     <>
//     <Project
//         title1="AUTI"
//         title2="SOCIAL"
//         description="A WEBSITE IN SUPPORT OF RAISING AUTISM AWARENESS"
//         imageSrc="/autisocial.png"
//         altText="autisocial"
//         titleRef1={line1}
//         titleRef2={line2}
//     />

//     <Project
//         title1="LUIZA"
//         title2="ELOIR"
//         description="A WEBSITE FOR A BRAZILIAN MODEL"
//         imageSrc="/siteluiza.png"
//         altText="luizaeloir"
//         titleRef1={line3}
//         titleRef2={line4}
//     />
// </>


// const Project = ({ title1, title2, description, imageSrc, altText, titleRef1, titleRef2 })=>{

//     return (
//         <>
//             <div className="w-full grid grid-cols-2 mt-24">
//             <div>
//                 <div className="sticky top-8">
//                   <div >
//                     <h1 ref={titleRef1} className="text-8xl font-semibold flex overflow-hidden">{title1}</h1>
//                     <h1 ref={titleRef2} className="text-8xl font-semibold flex overflow-hidden">{title2}</h1>
//                   </div>
//                   <div className="text-2xl flex justify-center pt-[150px]"><p className="w-3/12">{description}</p></div>
//                 </div>
//             </div>

//               <div className="h-[700px] w-full ">
//                 <div className="h-full w-full relative">
//                   <Image src={imageSrc} alt={altText} fill className="object-fill"/>
//                 </div>
//               </div>
//             </div>
//         </>

//     )
// }