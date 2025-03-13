import "./App.css";

import { Route, Routes } from "react-router";

import Header from "./components/Header";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import Products from "./components/Poducts";
import Contacts from "./components/Contacts";
import NotFound from "./components/NotFound";

function App() {
    return (
        <div className="bg-white">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/catalog" element={<Products />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
