import { Routes, Route } from "react-router";

import Header from "./components/header/Header";

import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import GameCreate from "./components/game-create/GameCreate";

import "./App.css";
function App() {
    return (
        <div id="box">
            <Header />
            {/* <!-- Main Content -->*/}
            <main id="main-content">
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/games/create" element={<GameCreate />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
