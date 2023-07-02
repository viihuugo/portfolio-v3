import { Routes , Route , useLocation } from 'react-router-dom';

import { Home, About, Work, CryptoStats, AutiSocial, Contact, StayFinder } from './pages';
import { pageTransition } from './animations';

import { SwitchTransition, Transition } from "react-transition-group";

function App() {
  
  const location = useLocation();

  return (
    <>
      <SwitchTransition>
        <Transition
          key={location.pathname}
          timeout={1200}
          onExit={pageTransition}
          in={true}
          mountOnEnter={true}
          unmountOnExit={true}
        >        
          <div>
            <div className="background h-screen w-full opacity-0 bg-[#0F0F0F] fixed top-0 left-0 right-0 bottom-0 z-[-1]"></div>
            <Routes location={location}>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>     
              <Route path="/work" element={<Work/>}/>    
              <Route path="/work/cryptostats" element={<CryptoStats/>}/>
              <Route path="/work/autisocial" element={<AutiSocial/>}/>
              <Route path="/work/stayfinder" element={<StayFinder/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
          </div>

        </Transition>

      </SwitchTransition>      
    </>
  )
}

export default App
