import { Route, Routes } from "react-router-dom";
import Home from "./components/views/Home";
import NotFound from "./components/views/NotFound";
import UserForm from "./components/views/user/UserForm";
import UserList from "./components/views/user/UserList";
import UserAccount from "./components/views/user/UserAccount";
import Packages from "./components/views/Packages";
import Tours from "./components/views/Tours";
import Services from "./components/views/Services";
import About from "./components/views/About";
import Gallery from "./components/views/Gallery";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user-account" element={<UserAccount />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            

            <Route path="/user" element={<UserList />} />
            <Route path="/user/new" element={<UserForm />} />
            <Route path="/user/:id" element={<UserForm />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;