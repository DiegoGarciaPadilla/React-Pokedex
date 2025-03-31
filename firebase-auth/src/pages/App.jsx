import { Routes, Route } from "react-router";
import { Login } from "./Login";

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    );
};
