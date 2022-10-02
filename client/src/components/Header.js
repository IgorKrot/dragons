


function Header () {

   return (  
      <header className="header">
         <div className="header_flex">
            <div className="header_logo">
               <div className="logo">
                  <div className="logo_img"></div>
               </div>
            </div>
            <div className="buttons_bLock_flex">
               <div className="button_left">
                  <div className="button_left_text">Login/Icon</div>
               </div>
               <div className="button_right">
                  <div className="button_right_text">Reg/Exit</div>
               </div>
            </div>
         </div>
      </header>
   );
}

export default Header;