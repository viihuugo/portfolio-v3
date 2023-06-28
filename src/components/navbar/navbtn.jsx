import { useState } from "react";
import Navbar from "./navbarinner"

export default function Navbtn() {

    //State for menu button
  const [state, setState] = useState({
    initial: false,
    clicked: false,
    menuName: "Menu"
  });

  //State for disabled button
  const [disabled, setDisabled] = useState(false);

  const handleMenu = () => {
    disabledMenu();
    if(state.initial === false ) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close"
      });
    } else if (state.clicked === true ) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu"
      });    
    } else if (state.clicked === false ) {
      setState({
        clicked: !state.clicked,
        menuName: "Close"
      });
    }
  };

  //Determine if the menu button should be disabled
  const disabledMenu = () => {
    setDisabled(!disabled);
    setTimeout(()=>{
      setDisabled(false)
    }, 1200)
  }

  return (
    <div className="fixed right-0 z-50">

        { state.clicked === true ? <button disabled={disabled} onClick={handleMenu} className="absolute right-0 text-xl text-white mt-8 mr-12 z-20">CLOSE</button> : <button disabled={disabled} onClick={handleMenu} className="absolute right-0 text-xl mt-8 mr-12  max-lg:mr-3">MENU</button> }
        
        <Navbar state={state}/>
    </div>
  )
}
