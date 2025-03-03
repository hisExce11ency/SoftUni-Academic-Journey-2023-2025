import { useState } from "react";
export default function Timer() {
    const startingValue = 0;
    const [time, setTime] = useState(startingValue);

    // ! Non Optimal way(for beginers)and it dose not work qite right the way we want becouse set interval is repetedly called every 1000ms

    // ? setInterval(() => {

    // setTime(time + 1);
    // console.log(time);
    // }, 1000);

    // ! Optimal way
    setTimeout(() => {
        setTime(time + 1);
        console.log(time);
    }, 1000);

    return (
        <>
            <h2> Timer </h2>
            <div>{time}</div>
            <hr />
        </>
    );
}
