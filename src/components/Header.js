import {Link} from "react-router-dom"


function Header () {

   return (  
      <header className="header">
         <div className="header_flex">
            <Link to="/">
               <div className="header_logo">
                  <div className="logo">
                     <div className="logo_img"></div>
                  </div>
               </div>
            </Link>
               <div className="buttons_bLock_flex">
                  <Link to="/auth">
                     <button className="button_left">
                        <div className="button_left_text">Login/Acc</div>
                     </button>
                  </Link>
                  <Link to="/auth">
                     <button className="button_right">
                        <div className="button_right_text">Reg/Exit</div>
                     </button>
                  </Link>
               </div>
         </div>
      </header>
   );
}

export default Header;