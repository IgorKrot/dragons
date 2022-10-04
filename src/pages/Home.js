import CarouselDragons from "../components/CarouselDragons"
import Description from "../components/Description"
import Popupinfo from "../components/Popupinfo"
import Droplist from "../components/Droplist"

function Home () {

   return (  
      <div className="App">
         <h1>Rockets</h1>
         <CarouselDragons />
         <Description />
         <Popupinfo />
         <Droplist />
      </div>
   );
}

export default Home;