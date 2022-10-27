import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leaderboard" element=" {<Example/> }" />
        <Route path="/dashboard" element="" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
