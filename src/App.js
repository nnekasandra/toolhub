import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import Example from "./pages/leaderboard";
function App() {
  return (
   <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element=''/>
        <Route path='/leaderboard' element=" {<Example/> }"/>
        <Route path='/dashboard' element=''/>
      </Routes>
     <Footer/>
   </BrowserRouter>
  );
}

export default App;
