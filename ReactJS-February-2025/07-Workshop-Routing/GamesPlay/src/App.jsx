import { Routes, Route } from "react-router";

import Header from "./components/header/Header";

import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import GameCatalog from "./components/game-catalog/GameCatalog";
import GameCreate from "./components/game-create/GameCreate";
import GameDetails from "./components/game-details/GameDetails";
import GameEdit from "./components/game-edit/GameEdit";

import "./App.css";
import { useState } from "react";
function App() {
    const [email, setEmail] = useState("");

    const userLoginHandler = (email) => {
        setEmail(email);
    };

    return (
        <div id="box">
            <Header />
            {/* <!-- Main Content -->*/}
            <main id="main-content">
                <Routes>
                    <Route index element={<Home />} />
                    <Route
                        path="/login"
                        element={<Login onLogin={userLoginHandler} />}
                    />
                    <Route path="/register" element={<Register />} />
                    <Route path="/games" element={<GameCatalog />} />
                    <Route path="/games/create" element={<GameCreate />} />
                    <Route
                        path="/games/:gameId/details"
                        element={<GameDetails email={email} />}
                    />
                    <Route path="/games/:gameId/edit" element={<GameEdit />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
