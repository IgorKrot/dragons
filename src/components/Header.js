import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import {setLogin} from '../redux/slices/dataAuth'


function Header () {
   const {login} = useSelector((state) => state.auth);

   const dispatch = useDispatch();
   let navigate = useNavigate();

   const logOut = () => {
      dispatch(setLogin(false));
      navigate("/");
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
            {login ?
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
                  <Link to="/auth">
                     <button className="button_right">
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