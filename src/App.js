
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Viewpage from "./Components/Viewpage";
import Usersignin from "./Components/Usersignin";
import Usersignout from "./Components/Usersignout";
import Professionalsigin from "./Components/Professionalsigin";
import Professionalsigout from "./Components/Professionalsigout";
import Usernewpassword from "./Components/Usernewpassword";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
   <>
   
   <Router>
    <ToastContainer />
    <Routes>
      <Route exact path="/" element={<Viewpage/>}/>
      <Route path="/Usersignin" element={<Usersignin/>}/>
      <Route path="/Usersignout" element={<Usersignout/>}/>
      <Route path="/Professionalsigin" element={<Professionalsigin/>}/>
      <Route path="/Professionalsigout" element={<Professionalsigout/>}/>
      <Route path="/Usernewpassword" element={<Usernewpassword/>}/>

    </Routes>
  </Router>
  
   </>
   
  );
}

export default App;
