import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Teams from "./pages/teams/Teams";
import Individuals from "./pages/individuals/Individuals";
import Enterprise from "./pages/enterprise/Enterprise";
import Navigation from "./components/shared/Navigation";
import Footer from "./components/shared/footer/Footer";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/individuals" element={<Individuals />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/enterprise" element={<Enterprise />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
