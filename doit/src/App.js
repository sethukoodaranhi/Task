
import './App.css';
import Loginpage from './Page/Loginpage';
import Home from './Page/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage />}>
         
          <Route path="home" element={<Home/>} />
          
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
