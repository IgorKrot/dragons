import CarouselDragons from "../components/CarouselDragons"
import Description from "../components/Description"
import Droplist from "../components/Droplist"

import { useEffect } from 'react';
import {useDispatch } from 'react-redux';
import { setIsAuth, setLogin } from '../redux/slices/dataAuth'


function Home () {
   const dispatch = useDispatch();
   
   useEffect(() => {
      const data = localStorage.getItem("loginStatus");
      const statusLogin = data ? JSON.parse(data) : false;
      dispatch(setLogin(statusLogin));
   }, []);

   useEffect(() => {
      const data = localStorage.getItem("authStatus");
      const statusAuth = data ? JSON.parse(data) : false;
      dispatch(setIsAuth(statusAuth));
   }, []);

   return (  
      <div className="Home">
         <h1>Rockets</h1>
         <CarouselDragons />
         <Description />
         <Droplist />
      </div>
   );
}

export default Home;