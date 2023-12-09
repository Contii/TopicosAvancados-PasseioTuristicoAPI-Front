import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/views/NotFound";
import UserForm from "./components/views/user/UserForm";
import UserList from "./components/views/user/UserList";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/"         element={<Home />} />
            <Route path="/user"     element={<UserList />} />
            <Route path="/user/new" element={<UserForm />} />
            <Route path="/user/:id" element={<UserForm />} />
            <Route path="*"         element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;