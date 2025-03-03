import { useState } from "react";
export default function KillCounter() {
    const [count, setCount] = useState(0);

    const isMax = count >= 10;

    const increaseCountClickHandler = () => {
        setCount(count + 1);
    };

    const decreaseCountClickHandler = () => {
        setCount(count - 1);
    };

    if (count > 10) {
        return (
            <>
                <h1>Game Over!</h1>
                <hr />
            </>
        );
    }
    let titleElement = <h2>Kill Counter</h2>;
    if (count == 1) {
        titleElement = <h1>First Blode!</h1>;
    }

    switch (count) {
        case 2:
            titleElement = <h6>Double Kill</h6>;
            break;
        case 3:
            titleElement = <h5>Tripple kill!</h5>;
            break;
        case 4:
            titleElement = <h4>Multi Kill</h4>;
            break;
        case 5:
            titleElement = <h3>Unstappeble</h3>;
            break;
        case 6:
            titleElement = <h1>GodLike</h1>;
            break;
    }

    return (
        <>
            {titleElement}
            <div>{count}</div>
            <button onClick={increaseCountClickHandler}>Increment</button>
            {count > 5 ? (
                <button onClick={decreaseCountClickHandler}>Decrement</button>
            ) : (
                <p>No decrement yet!</p>
            )}

            {isMax && <p>Watch out!</p>}
            <hr />
        </>
    );
}
