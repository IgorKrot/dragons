import { useSelector, useDispatch } from 'react-redux';
import { fetchDragons } from '../redux/slices/dataForDropListSLice'
import { useEffect, useState, useRef} from 'react';


function Droplist () {
   const { rockets } = useSelector((state) => state.rockets);
   const [openPopup, setOpenPopup] = useState();

   const dispatch = useDispatch();
   const popupRef = useRef();



   useEffect(() => {
      const clickOutside = (event) => {
         if (!event.path.includes(popupRef.current)) {
            setOpenPopup(null)
         }
      };
      document.body.addEventListener("click", clickOutside);
      return () => {document.body.removeEventListener("click", clickOutside);}
   }, []);

   useEffect(() => {
      async function getDragons () {
         dispatch(fetchDragons())};
         getDragons();
   }, []);

   
   return ( 
      <div className="list_dragons_main" ref={popupRef}>
         {rockets ?
         <div className="list_dragons">
               {rockets.map((dragons, i) =>
               <div className="list_dragons_flex" key={i} onClick={() => setOpenPopup(i)}>
                  <div className="list_dragons_img">
                     <img className="dragons_img" width = "100" height = "100" src={dragons.flickr_images[i]} alt="dragon" />
                  </div>
                  <div className="list_dragons_name">name: {dragons.name}</div> 
                  {(openPopup == i) && 
                     (<div className="description_main_drop_list">
                        <ul className="list_description">
                           <li className="name">name: {dragons.name}</li>
                           <li className="description">description: {dragons.description}</li>
                           <li className="wiki">wikipedia: {dragons.wikipedia}</li>
                           <li className="mass">mass: {dragons.dry_mass_kg}</li>
                           <li className="mass">diametr: {dragons.diameter.meters}</li>
                           <li className="name">first flight: {dragons.first_flight}</li>
                        </ul>
                        <button className="button_close" onClick={(e) => {setOpenPopup(null); e.stopPropagation();}}>Close</button>
                     </div>)
                  }
               </div>   
               )}
         </div> 
         : <div>"Loading..."</div>} 
      </div>
   );
}

export default Droplist;