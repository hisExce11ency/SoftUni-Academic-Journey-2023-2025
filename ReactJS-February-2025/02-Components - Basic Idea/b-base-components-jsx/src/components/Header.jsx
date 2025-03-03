export default function Header(props) {
    return (
        <header>
            <h1>{props.title}</h1>
            <h2>{props.subHeading}</h2>
        </header>
    );
    // console.log(props);
    // return (
    //     <header>
    //         <h1>Hello World!</h1>
    //         <h2>React is awesome!</h2>
    //     </header>
    // );
}
