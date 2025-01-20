import { Routes, Route } from "react-router-dom"; 
import HomePage from "../pages/HomePage";
import Destination from "../pages/Destination";
import Experience from "../pages/Experience";
import MainLayout from "../layout/MainLayout";

function Router() {
    return (
        <Routes>
            {/* MainLayout will be the wrapper for all the routes below it */}
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} /> {/* Default Route */}
                <Route path="destination" element={<Destination />} />
                <Route path="experience" element={<Experience />} />
            </Route>
        </Routes>
    );
}

export default Router;
