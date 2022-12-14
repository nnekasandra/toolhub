import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Dashboard } from "./pages/Dashboard";
import {Leaderboard }from "./pages/Leaderboard";
export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leaderboard" element= {<Leaderboard/> }/>
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
