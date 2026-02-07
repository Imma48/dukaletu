import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import "./App.css";
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";
import ProductsPage from "./components/ProductsPage";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />

        <main className="flex-fill d-flex justify-content-center align-items-center">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
