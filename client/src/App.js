import {Route, Routes} from "react-router-dom";

import Home from "../src/pages/Home";
import Account from "../src/pages/Account";
import Header from "../src/components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

import "../src/scss/main/app.scss"


function App() {
   return (
      <div className="App">
         <div className="wrapper">
            <div className="content"> 
               <Header />
               <h1>Rockets</h1>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/account" element={<Account />} />
               </Routes>
            </div>
         </div>
      </div>
   );
   }

export default App;
