import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Page2 from './Components/Page2'

function App() {
  return (
    <>
    <div className="App">
     
     <h1> TITLE or Navbar goes here</h1>

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
