import MovieListItem from "./MovieListItem";

export default function MovieList(props) {
    return (
        <>
            <h3>Moovie list:</h3>
            <div>
                <MovieListItem movie={props.movies[0]} />
                <hr />
                <MovieListItem movie={props.movies[1]} />
                <hr />
                <MovieListItem movie={props.movies[2]} />
                <hr />
                <MovieListItem movie={props.movies[3]} />
                <hr />
                <MovieListItem movie={props.movies[4]} />
                <hr />
                <MovieListItem movie={props.movies[5]} />
                <hr />
                <MovieListItem movie={props.movies[6]} />
                <hr />
                <MovieListItem movie={props.movies[7]} />
                <hr />
                <MovieListItem movie={props.movies[8]} />
            </div>
        </>
    );
}
