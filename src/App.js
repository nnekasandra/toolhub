import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
   <BrowserRouter>
      <p>Header</p>
      <Routes>
        <Route path='/' element=''/>
        <Route path='/leaderoard' element=''/>
        <Route path='/dashboard' element=''/>
      </Routes>
      <p>footer</p>
   </BrowserRouter>
  );
}

export default App;
