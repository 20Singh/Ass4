import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Home from './component/Home';
import ContactUs from './component/ContactUs';
import Students from './component/Students';
import Img from './component/Img';


function App() {
  return (
    
      <BrowserRouter>
             
     
        <Home />
       
        <Routes>
         <Route path='/' element={<Img/>} />
          <Route path='/student' element={<Students/>} />
          <Route path='/contact' element={<ContactUs/>} />
        </Routes>
      
        </BrowserRouter>
    
  );
}

export default App;