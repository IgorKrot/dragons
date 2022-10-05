import {Link} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { setUser, setIsAuth } from '../redux/slices/dataAuth'
import {useNavigate } from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";


function Header () {
   const dispatch = useDispatch();
   let navigate = useNavigate();
   const {isAuth, user} = useSelector((state) => state.auth);

   const logOut = () => {
      dispatch(setUser({}));
      dispatch(setIsAuth(false));
   }

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
            {isAuth ?
               <div className="buttons_bLock_flex">
                  <Link to="/account">
                     <button className="button_left">
                        <div className="button_left_text">Acc</div>
                     </button>
                  </Link>
                  <Link to="/auth">
                     <button className="button_right" onClick={() => logOut()}>
                        <div className="button_right_text">Exit</div>
                     </button>
                  </Link>
               </div>
            :
            <div className="buttons_bLock_flex">
                  {/* <Link to="/auth">
                     <button className={isAuth ? "button_left none" : "button_left" }>
                        <div className="button_left_text" onClick={() => navigate(LOGIN_ROUTE)}>Login</div>
                     </button>
                  </Link> */}
                  <Link to="/auth">
                     <button className="button_right" onClick={() => navigate(LOGIN_ROUTE)}>
                        <div className="button_right_text">Auth</div>
                     </button>
                  </Link>
               </div>
            }
         </div>
      </header>
   );
}

export default Header;