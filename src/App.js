import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { HomePage } from "./pages/homepage";
function App() {
  return (
   <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/leaderboard' element=" {<Example/> }"/>
        <Route path='/dashboard' element=''/>
      </Routes>
     <Footer/>
   </BrowserRouter>
  );
}

export default App;
