//Get dom container
const rootDomElement = document.getElementById("root");

//Create root
const reactRootElement = ReactDOM.createRoot(document.getElementById("root"));

//Create react element without JSX
const headingReactElement = React.createElement(
    "h1",
    {},
    "Helow from React!"
)
const subheadingReactElement = React.createElement(
    "h2",
    { id: "sub-heading" },
    "The best framework!"
)
const headerSectionReactElement = React.createElement(
    "header",
    {},
    [headingReactElement, subheadingReactElement]
)

//Create react element with JSX
const headerSectionReactJSXElement = (
    <header>
        <h1 className="main-heading">Helow from JSX!</h1>
        <h2 id="sub-heading">The best Superset Language!</h2>
        <p>
            <strong>React</strong> is a JavaScript library for building user interfaces.
        </p>
    </header >
)

//Render react element to UI(dom container)
// !reactRootElement.render(headerSectionReactElement);
reactRootElement.render(headerSectionReactJSXElement);


//Compear react element vs dom element
setTimeout(() => {
    const subheadingDomElement = document.getElementById("sub-heading");
    console.dir(subheadingDomElement);
    console.dir(subheadingReactElement);
    // const newSubheadingReactelement = React.createElement(
    //     "h2",
    //     { id: "sub-heading" },
    //     "The best framework!"
    // )
    // reactRootElement.render(newSubheadingReactelement);
}, 500)