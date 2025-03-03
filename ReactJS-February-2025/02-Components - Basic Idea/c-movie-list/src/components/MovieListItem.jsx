export default function MovieListItem(props) {
    return (
        <article>
            <header>
                <h4> {props.movie.title}</h4>
            </header>
            <main>
                <img src={props.movie.posterUrl} alt={props.movie.title} />
                <p>{props.movie.plot} min</p>
            </main>
            <footer>
                <p>
                    Director:{props.movie.director}, year:{props.movie.year}
                </p>
            </footer>
        </article>
    );
}
