import { Routes, Route } from "react-router";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import Delivery from "../pages/Delivery";
import Contact from "../pages/Contact";
import MainLayout from "../layout/MainLayout";


function Router() {

    return (
        <Routes>
            <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
    );
}

export default Router;