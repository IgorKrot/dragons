import {Route, Routes} from "react-router-dom";

import Home from "../src/pages/Home";
import Auth from "../src/pages/Auth";
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
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/account" element={<Account />} />
                  <Route path="/auth" element={<Auth />} />
               </Routes>
               <footer className="footer"></footer>
            </div>
         </div>
      </div>
   );
   }

export default App;
