import { useSelector, useDispatch } from 'react-redux';
import { fetchDragon } from '../redux/slices/dataForCaruselSlice'
import { useEffect} from 'react';


function Description () {
   const { rocket } = useSelector((state) => state.rocket);

   // console.log(rocket);

   return ( 
      <>
         {rocket.active ?
         <div className="description_main">
            <ul className="list_description">
               <li className="name">name: {rocket.name}</li>
               <li className="description">description: {rocket.description}</li>
               <li className="wiki">wikipedia: {rocket.wikipedia}</li>
               <li className="mass">mass: {rocket.dry_mass_kg}</li>
               <li className="mass">diametr: {rocket.diameter.meters}</li>
               <li className="name">first flight: {rocket.first_flight}</li>
            </ul>
         </div>
         : <div>"Loading..."</div>} 
      </>
   );
}

export default Description;