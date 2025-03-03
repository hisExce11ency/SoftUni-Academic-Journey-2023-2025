import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Timer from "./components/Timer";

function App() {
    const [showInput, setShowInput] = useState(false);
    const showButtonHandler = () => {
        setShowInput((state) => !state);
    };
    return (
        <>
            <h1>UseEffect Hook</h1>
            <button onClick={showButtonHandler}>
                {showInput ? "Hide" : "Show"} Input
            </button>
            {showInput && <Input />}
            <hr />
            {showInput && <Timer />}
        </>
    );
}

export default App;
