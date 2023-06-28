import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function LandingReveal({ setLoading }) {
    
  const [counterValue, setCounterValue] = useState(0);
  useEffect(() => {
    const startLoader = () => {
      if (counterValue < 100) {
        document.body.style.overflow = "hidden";
        const delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(() => {
          setCounterValue((prevValue) => {
            const newValue = prevValue + Math.floor(Math.random() * 10) + 1;
            return newValue > 100 ? 100 : newValue;
          });
        }, delay);
      }
    };
    startLoader();
    if (counterValue === 100) {
      document.body.style.overflow = "auto";
      gsap.to(".head", {
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        ease: "power3.inOut",
        onComplete: () => {
          gsap.to(".overlay", {
            duration: 1.5,
            height: 0,
            transformOrigin: "right bottom",
            ease: "power3.inOut",
            onComplete: () => {
              setLoading(true); 
              gsap.to(".overlay", {
                zIndex: -10,
              })
            },
          });
        },
      });
    }
  }, [counterValue, setLoading]);

  return (
      <div className='h-full w-full overflow-hidden relative'>
        <div className="overlay h-screen w-screen bg-[#0F0F0F] flex fixed top-0 left-0 right-0 bottom-0 z-[1000]">
          <div className="head m-16 max-[500px]:m-4 flex flex-col text-4xl text-zinc-400 font-semibold">
            <div>VICTOR ALVES</div>
            <div>PORTFOLIO©2023</div>
          </div>
          <div className="head absolute bottom-0 right-0 mb-24 mr-24 max-[500px]:mr-6 text-9xl text-zinc-400 font-semibold">
            {counterValue}
          </div>
        </div>
      </div>
    );
  }