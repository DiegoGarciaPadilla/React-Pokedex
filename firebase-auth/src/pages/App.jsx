import { Routes, Route } from "react-router";
import { Home } from "./Home";
import { Login } from "./Login";
import { SignUp } from "./SignUp";


export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    );
};
