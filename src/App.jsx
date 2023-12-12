import NavbarComponent from './components/ui/Navbar.component';
import FooterComponent from './components/ui/Footer.component';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home.page';
import ProductsPage from './pages/Products.page';
import NewsPage from './pages/News.page';
import AboutPage from './pages/About.page';
import ContactPage from './pages/Contact.page';
import GalleryPage from './pages/Gallery.page';
import './index.css';
import PopupComponent from "./components/ui/Popup.component";
import {FaTimes} from "react-icons/fa";




function App() {
  return (
    <div>
      <NavbarComponent />
        <PopupComponent trigger={true}>
            <form className="max-w-sm px-4">
                <div className="relative z-50 top-10 left-5 right-80">
                    <div>
                        <FaTimes />
                    </div>
                    <input
                        type="text"
                        placeholder="جستجو کنید ..."
                        className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    />
                </div>
            </form>
        </PopupComponent>
      <div className="wrapper bg-white">
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
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
