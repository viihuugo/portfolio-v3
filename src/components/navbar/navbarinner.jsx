import { Link } from 'react-router-dom';
import React, { useEffect, useRef } from 'react'

import { revealMenu, closeMenu } from '../../animations';

export default function Navbar({state}) {

    let menu = useRef(null);

    useEffect(()=>{
       
            if(state.clicked === false){
            //close menu
            closeMenu(menu);
            document.body.style.overflow = 'auto';
        } else if (state.clicked === true || state.clicked === true && state.initial === null){
            //open
            revealMenu(menu);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.body.style.overflow = 'auto';
          };
    }, [state])

  return (
    <div className='h-full w-full overflow-hidden'>
        <div ref={el => (menu = el)} className='h-screen w-[500px] max-[480px]:w-full bg-[#1C1D20]'>
            <div className='py-36 px-24 h-full flex flex-col justify-around max-[500px]:px-16'>
                <div className='text-slate-300 uppercase mb-8 border-b border-slate-300'>                   
                    Navigation
                </div>
                <div className='text-6xl text-white flex flex-col'>                   
                    <Link className='py-2' scroll to="/">HOME</Link>
                    <Link className='py-2' scroll to="/about">ABOUT</Link>
                    <Link className='py-2' scroll to="/work">WORK</Link>
                    <Link className='py-2' scroll to="/contact">CONTACT</Link>
                </div>
                <div className='mt-8 flex flex-col'>                   
                    <div className='text-slate-300'>SOCIALS</div>
                    <div className='text-white mt-4 flex gap-8'>
                        <div><a href="https://www.linkedin.com/in/victorhugoalves/">LINKEDIN</a></div>
                        <div><a href="https://github.com/viihuugo">GITHUB</a></div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
