import { Routes, Route } from "react-router-dom"; // Note: should be 'react-router-dom', not 'react-router'
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import Delivery from "../pages/Delivery";
import Contact from "../pages/Contact";
import MainLayout from "../layout/MainLayout";

function Router() {
    return (
        <Routes>
            {/* MainLayout will be the wrapper for all the routes below it */}
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} /> {/* Default Route */}
                <Route path="products" element={<ProductPage />} />
                <Route path="delivery" element={<Delivery />} />
                <Route path="contact" element={<Contact />} />
            </Route>
        </Routes>
    );
}

export default Router;
