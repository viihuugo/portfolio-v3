import { useEffect, useRef } from "react";
import Navbtn from './navbtn';
import { Link } from "react-router-dom";
import { revealNavbar } from "../../animations";

export default function Navbar() {
  let nav = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 960) {
        revealNavbar(nav);
      }
    };

    handleResize(); // Run the effect initially

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={el => (nav = el)} className='w-full flex fixed z-30'>
      <div className='text-2xl font-semibold mt-8'>
        <Link to="/">VICTOR ALVES</Link>
      </div>
      <Navbtn/>
    </div>
  );
}