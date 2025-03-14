import "./App.css";

import { Route, Routes } from "react-router";

import Header from "./components/Header";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import Products from "./components/Poducts";
import Contacts from "./components/Contacts";
import NotFound from "./components/NotFound";
import ProductDetails from "./components/ProductDetails";

import IndividualPricing from "./components/IndividulaPricing";
import BusinessPricing from "./components/BusinessPrising";

function App() {
    return (
        <div className="bg-white">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pricing/" element={<Pricing />}>
                    <Route index element={<IndividualPricing />} />
                    <Route path="business" element={<BusinessPricing />} />
                </Route>
                <Route path="/catalog" element={<Products />} />
                <Route
                    path="/catalog/:productId"
                    element={<ProductDetails />}
                />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
