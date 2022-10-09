import { useSelector, useDispatch } from 'react-redux';
import { fetchDragon } from '../redux/slices/dataForCaruselSlice'
import { useEffect} from 'react';
import { Carousel } from 'react-bootstrap';

function CarouselDragons () {
   const { rocket } = useSelector((state) => state.rocket);
   const dispatch = useDispatch();


   useEffect(() => {
      async function getDragon () {
         dispatch(fetchDragon())};
         getDragon();
   }, []);

   return (  
      <>
         {rocket.active ? 
         <Carousel className='carousel_main'>
            <Carousel.Item interval={1000}>
               <img
                  className="d-block w-100"
                  src={rocket.flickr_images[0]}
                  alt="First slide"
                  width = "700"
                  height = "350"
               />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
               <img
                  className="d-block w-100"
                  src={rocket.flickr_images[1]}
                  alt="Second slide"
                  width = "700"
                  height = "350"
               />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
               <img
                  className="d-block w-100"
                  src={rocket.flickr_images[2]}
                  alt="Third slide"
                  width = "700"
                  height = "350"
               />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
               <img
                  className="d-block w-100"
                  src={rocket.flickr_images[3]}
                  alt="Third slide"
                  width = "700"
                  height = "350"
               />
            </Carousel.Item>
         </Carousel>
         : <div>"Loading....."</div>} 
      </>
   );
}

export default CarouselDragons;