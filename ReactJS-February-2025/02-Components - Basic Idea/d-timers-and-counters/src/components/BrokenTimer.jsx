export default function BrokenTimer() {
    let timer = 0;
    // !Does Not work !!!(working only in the memory but not in the DOM we need to make React to update the DOM)
    setInterval(() => {
        timer++;
        // console.log(timer);
    }, 1000);

    return (
        <>
            <h2>Broken Timer(uncomplete) </h2>
            <div>{timer}</div>
            <hr />
        </>
    );
}
