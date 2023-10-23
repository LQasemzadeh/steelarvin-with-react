import NavbarComponent from "./components/ui/Navbar.component";
import FooterComponent from "./components/ui/Footer.component";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.page";
import ProductsPage from "./pages/Products.page";
import NewsPage from "./pages/News.page";
import AboutPage from "./pages/About.page";
import ContactPage from "./pages/Contact.page";


function App() {
  return (
    <div>
      <NavbarComponent />
      <div className="wrapper">
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/about-us" element={<AboutPage />} />
              <Route path="/contact-us" element={<ContactPage />} />
          </Routes>
      </div>
      <FooterComponent />

    </div>
  );
}

export default App;
