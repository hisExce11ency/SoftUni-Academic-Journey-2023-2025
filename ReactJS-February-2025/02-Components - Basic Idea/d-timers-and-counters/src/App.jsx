import "./App.css";
import BrokenTimer from "./components/BrokenTimer";
import Timer from "./components/Timer";
import Counter from "./components/Counter";
import KillCounter from "./components/KillCounter";

function App() {
    return (
        <>
            <h1>Timers and Counters</h1>
            <BrokenTimer />
            <Timer />
            <Counter />
            <KillCounter />
        </>
    );
}

export default App;
