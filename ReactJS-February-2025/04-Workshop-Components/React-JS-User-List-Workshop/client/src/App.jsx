import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import UserList from "./components/UserList/UserList";

function App() {
    return (
        <>
            <Header />
            {/* <!-- Main component  --> */}
            <main className="main">
                <UserList />
            </main>
            <Footer />
        </>
    );
}

export default App;
