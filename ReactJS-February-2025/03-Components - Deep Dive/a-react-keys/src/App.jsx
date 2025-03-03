import { useState } from "react";
import "./App.css";
import MovieListItem from "./components/MovieListItem";

function App() {
    const [movies, setMovies] = useState([
        { id: 1, title: "The Matrix" },
        { id: 2, title: "Man of Steel" },
        { id: 3, title: "The Case of Christ" },
        { id: 4, title: "The Lord of the Rings" },
        { id: 5, title: "The Dark Knight" },
        { id: 6, title: "Star Wars" },
        { id: 7, title: "The Lord of the Rings" },
    ]);

    // ! The example below is working however, it is the most rocky way to do it
    // let movieElements = [];
    // for (const movie of movies) {
    //     movieElements.push(<li>{movie}</li>);
    // }
    const removeFirstHandler = () => {
        movies.shift(); // ! DO NOT DO THIS !!! AT HOME
        setMovies([...movies]); // !When updating state with reference type we need to set a new reference on updtae
        // setMovies(movies.slice());
    };

    //* Key shuld be unique among siblings, otherwise React will throw an error and will behave unexpectedly.
    //* Keys shuld be unchangeable between renders and should not be  re generated every render so the key should be static the index is not static.
    // ? Option 1
    // return (
    //     <>
    //         <h2>Favorit Movies</h2>
    //         <ul>
    //             {movies.map((movie) => (
    //                 <li key={movie.id}>
    //                     <a href="#">{movie.title}</a>
    //                 </li>
    //             ))}
    //         </ul>
    //         <button onClick={removeFirstHandler}>Remove First</button>
    //     </>
    // );
    // ? Option 2
    return (
        <>
            <h2>Favorit Movies</h2>
            <ul>
                {movies.map((movie) => (
                    <MovieListItem key={movie.id} movie={movie} />
                ))}
            </ul>
            <button onClick={removeFirstHandler}>Remove First</button>
        </>
    );
}

export default App;
