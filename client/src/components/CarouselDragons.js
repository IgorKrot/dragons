import { useSelector, useDispatch } from 'react-redux';
import { fetchDragon } from '../redux/slices/dataForCaruselSlice'
import { useEffect} from 'react';
// import { dataFromLs } from "../redux/slices/dataForCaruselSlice"
import { Carousel } from 'react-bootstrap';

function CarouselDragons () {
   const { rocket } = useSelector((state) => state.rocket);
   const dispatch = useDispatch();


   useEffect(() => {
      async function getDragon () {
         dispatch(fetchDragon())};
         getDragon();
   }, []);


   useEffect(() => {
      const dataForLS = JSON.stringify(rocket);
      localStorage.setItem("dragon", dataForLS);
   }, [rocket]);

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

   // const getDataFromLS = () => {
   //    const data = localStorage.getItem("dragon");
   //    const rocketFromLS = data ? JSON.parse(data) : [];
   //    return rocketFromLS
   //    dispatch(dataFromLs(rocketFromLS));
   // };
   // console.log(getDataFromLS);


{/* <Carousel className='carousel_main'>
<Carousel.Item interval={1000}>
   <img
      className="d-block w-100"
      src="https://live.staticflickr.com/8578/16655995541_078768dea2_b.jpg"
      alt="First slide"
   />
   <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
   </Carousel.Caption>
</Carousel.Item>
<Carousel.Item interval={500}>
   <img
      className="d-block w-100"
      src="https://farm3.staticflickr.com/2815/32761844973_4b55b27d3c_b.jpg"
      alt="Second slide"
   />
   <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
   </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
   <img
      className="d-block w-100"
      src="https://farm9.staticflickr.com/8618/16649075267_d18cbb4342_b.jpg"
      alt="Third slide"
   />
   <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
      </p>
   </Carousel.Caption>
</Carousel.Item>
</Carousel> */}