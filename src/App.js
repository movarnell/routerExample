import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Page2 from './Components/Page2'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <div className="App">
     
     <h1 className='text-center fw-bolder display-1'> And here is the Infamous Page Title</h1>

   <Routes>
    {/* Below using Route is how you link to the component you want to load */}
   <Route path="/" element={<Home/>}></Route>  
   <Route path="/Page2" element={<Page2 />}></Route>
   </Routes>
    </div>
    </>
  );
}

export default App;
