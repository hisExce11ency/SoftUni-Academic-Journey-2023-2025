const rootDomElement = document.getElementById('root');
const rootReactElement = ReactDOM.createRoot(rootDomElement);

// const headerReactElement = React.createElement('h1', null, 'React Components!');
// console.log(headerReactElement); 
// rootReactElement.render(headerReactElement);

// Functional Component is function that returns React Element !!!

// function Header() {
//     const headerReactElement = React.createElement('h1', null, 'React Components!!!');
// with props
function Header(props) {
    const headerReactElement = React.createElement('h1', null, props.title);

    const subheaderReactElement = React.createElement('h2', { className: 'sub-header' }, 'Components are awesome!');

    const hgroupReactElement = React.createElement('div', null, headerReactElement, subheaderReactElement);

    // const reactFragment = React.createElement(React.Fragment, null, headerReactElement, subheaderReactElement);

    return hgroupReactElement;
}

function Body() {
    return React.createElement(
        'main',
        null,
        React.createElement('p', null, 'Lorem ipsum dolor sit amet...'),
    );
}

// !!! Composition
// function App() {
//     return React.createElement(
//         React.Fragment,
//         null,
//         React.createElement(Header),
//         React.createElement(Body),
//     );
// }
// ! With props
function App() {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(Header, { title: 'Hello World!', subTitle: 'React is awesome!' }),
        React.createElement(Body),
    );
}
rootReactElement.render(React.createElement(App));
