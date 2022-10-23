import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { route } from "./common";
import HomePage from "./pages/HomePage";
import NavBar from "./components/navbar/NavBar";
import TopBar from "./components/topbar/TopBar";
import Footer from "./components/footer/Footer";
import SignUpPage from "./pages/SignUp/SignUpPage";
import SignInPage from "./pages/SignIn/SignInPage";
import CategoriesPage from "./pages/categoriespage/CategoriesPage";
import ProductsPage from "./pages/productspage/ProductsPage";
import ShoppingPersonalInfo from "./pages/shoppingpersonalinfo/ShoppingPersonalInfo";

function App() {
  return (
    <div className="App">
      <TopBar />
      <NavBar />
      <Routes>
        <Route path={route.Home} element={<HomePage />} />
        <Route path={route.Login} element={<SignInPage />} />
        <Route path={route.SignUp} element={<SignUpPage />} />
        <Route path={route.Categories} element={<CategoriesPage />} />
        <Route path={route.Products} element={<ProductsPage />} />
        <Route path={route.Shop} element={<ShoppingPersonalInfo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
