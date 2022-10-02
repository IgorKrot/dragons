import { useSelector, useDispatch } from 'react-redux';
import { fetchDragons } from '../redux/slices/dataForDropListSLice'
import { useEffect, useState} from 'react';



function Droplist () {
   const { rockets } = useSelector((state) => state.rockets);
   const [openPopup, setOpenPopup] = useState(false);
   console.log(rockets);
   const dispatch = useDispatch();
   // const popupStatus = useRef(false);

   useEffect(() => {
      async function getDragons () {
         dispatch(fetchDragons())};
         getDragons();
   }, []);


   
   return ( 
      <div className="list_dragons_main">
         {rockets ?
         <div className="list_dragons">
               {rockets.map((dranons, i) =>
               <div className="list_dragons_flex" key={i} onClick={() => setOpenPopup(!openPopup)}>
                  <div className="list_dragons_img">
                     <img className="dragons_img" width = "100" height = "100" src={dranons.flickr_images[i]} alt="dragon" />
                  </div>
                  <div className="list_dragons_name">name: {dranons.name}</div> 
                  {openPopup && (
                     <div className="description_main">
                        <ul className="list_description">
                           <li className="name">name: {dranons.name}</li>
                           <li className="description">description: {dranons.description}</li>
                           <li className="wiki">wikipedia: {dranons.wikipedia}</li>
                           <li className="mass">mass: {dranons.dry_mass_kg}</li>
                           <li className="mass">diametr: {dranons.diameter.meters}</li>
                           <li className="name">first flight: {dranons.first_flight}</li>
                        </ul>
                     </div>
                  )}
               </div>   
               )}
         </div> 
         : <div>"Loading..."</div>} 
      </div>
   );
}

export default Droplist;