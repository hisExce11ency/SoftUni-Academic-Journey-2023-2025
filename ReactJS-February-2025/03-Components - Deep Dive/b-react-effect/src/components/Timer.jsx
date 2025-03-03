import { useEffect, useState } from "react";

export default function Timer() {
    console.log(new Date().getSeconds());
    const [isManual, setIsManual] = useState(false);
    // calculate state default value
    const [time, setTime] = useState(() => {
        return new Date().getSeconds();
    });

    useEffect(() => {
        // let timeoute; // if it was a setInterval?!
        if (!isManual) {
            setTimeout(() => {
                setTime((seconds) => seconds + 1);
                setIsManual(false);
            }, 1000);
        }
        // return () => {
        //     clearTimeout(timeoute);
        // };
    }, [time, isManual]);

    const addTimeHandler = () => {
        setTime((seconds) => seconds + 10);
        setIsManual(true);
    };
    return (
        <>
            <h3>Timer</h3>
            <div>{time}</div>
            <button onClick={addTimeHandler}>Add Time</button>
        </>
    );
}
