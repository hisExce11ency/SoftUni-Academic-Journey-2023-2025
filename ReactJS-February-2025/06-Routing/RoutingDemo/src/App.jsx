import "./App.css";

import { Route, Routes } from "react-router";

import Home from "./components/Home";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import Pricing from "./components/Pricing";

function App() {
    return (
        <div className="bg-white">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/catalog" element={<h1>Catalog</h1>} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </div>
    );
}

export default App;
