import { useEffect, useState } from "react";

export default function Input() {
    const [state, setState] = useState(true);
    const [text, setText] = useState("");
    //Basic useEffect
    //!unnesesery render with efect hooks as simple console log is doing the same job.
    // useEffect(() => {
    //     console.log("Each render");
    // });
    console.log("Each render");

    // On Mount
    useEffect(() => {
        console.log("Mounting");
    }, []);

    //On Input Change
    //* If using the variable directly we need to add the dependency array to the useEffect and use the varable itself
    useEffect(() => {
        console.log(`Text changed to ${text}`);
        // Clean up function before each change of dependancy variable array(text)
        // return () => {
        //     console.log("Before new change");
        // }
    }, [text]);

    //On Button Click (On State Change)
    useEffect(() => {
        console.log(`State changed to ${state}`);
    }, [state]);
    //on Unmount
    useEffect(() => {
        //Cleanup function
        return () => {
            console.log("Unmounting");
        };
    }, []);
    const buttonClickHandler = () => {
        console.log("Button Clicked");
        //Toggle state
        //!NOT THIS WAY dont use this when depending on old state due to race conditions.
        // * setState(!state);
        //!USE THIS Insted
        setState((currentState) => !currentState); //Use updater function when updating state derivative
    };

    const imputChangeHandler = (e) => {
        setText(e.target.value);
    };

    return (
        <>
            <h3>Input type component</h3>

            <input type="text" onChange={imputChangeHandler} />

            <button onClick={buttonClickHandler}>Update</button>
        </>
    );
}
