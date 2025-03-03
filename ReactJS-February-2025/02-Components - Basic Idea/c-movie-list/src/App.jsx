import "./App.css";
import MovieList from "./components/MovieList";

const movies = [
    {
        id: 90,
        title: "V for Vendetta",
        year: "2005",
        runtime: "132",
        genres: ["Action", "Drama", "Thriller"],
        director: "James McTeigue",
        actors: "Natalie Portman, Hugo Weaving, Stephen Rea, Stephen Fry",
        plot: 'In a future British tyranny, a shadowy freedom fighter, known only by the alias of "V", plots to overthrow it with the help of a young woman.',
        posterUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BOTI5ODc3NzExNV5BMl5BanBnXkFtZTcwNzYxNzQzMw@@._V1_SX300.jpg",
    },
    {
        id: 91,
        title: "Gattaca",
        year: "1997",
        runtime: "106",
        genres: ["Drama", "Sci-Fi", "Thriller"],
        director: "Andrew Niccol",
        actors: "Ethan Hawke, Uma Thurman, Gore Vidal, Xander Berkeley",
        plot: "A genetically inferior man assumes the identity of a superior one in order to pursue his lifelong dream of space travel.",
        posterUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BNDQxOTc0MzMtZmRlOS00OWQ5LWI2ZDctOTAwNmMwOTYxYzlhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
        id: 92,
        title: "Silver Linings Playbook",
        year: "2012",
        runtime: "122",
        genres: ["Comedy", "Drama", "Romance"],
        director: "David O. Russell",
        actors: "Bradley Cooper, Jennifer Lawrence, Robert De Niro, Jacki Weaver",
        plot: "After a stint in a mental institution, former teacher Pat Solitano moves back in with his parents and tries to reconcile with his ex-wife. Things get more challenging when Pat meets Tiffany, a mysterious girl with problems of her own.",
        posterUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM2MTI5NzA3MF5BMl5BanBnXkFtZTcwODExNTc0OA@@._V1_SX300.jpg",
    },
    {
        id: 93,
        title: "Alice in Wonderland",
        year: "2010",
        runtime: "108",
        genres: ["Adventure", "Family", "Fantasy"],
        director: "Tim Burton",
        actors: "Johnny Depp, Mia Wasikowska, Helena Bonham Carter, Anne Hathaway",
        plot: "Nineteen-year-old Alice returns to the magical world from her childhood adventure, where she reunites with her old friends and learns of her true destiny: to end the Red Queen's reign of terror.",
        posterUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNjAxMTc0Nl5BMl5BanBnXkFtZTcwODc3ODk5Mg@@._V1_SX300.jpg",
    },
    {
        id: 94,
        title: "Gandhi",
        year: "1982",
        runtime: "191",
        genres: ["Biography", "Drama"],
        director: "Richard Attenborough",
        actors: "Ben Kingsley, Candice Bergen, Edward Fox, John Gielgud",
        plot: "Gandhi's character is fully explained as a man of nonviolence. Through his patience, he is able to drive the British out of the subcontinent. And the stubborn nature of Jinnah and his commitment towards Pakistan is portrayed.",
        posterUrl:
            "http://ia.media-imdb.com/images/M/MV5BMzJiZDRmOWUtYjE2MS00Mjc1LTg1ZDYtNTQxYWJkZTg1OTM4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
    },
    {
        id: 95,
        title: "Pacific Rim",
        year: "2013",
        runtime: "131",
        genres: ["Action", "Adventure", "Sci-Fi"],
        director: "Guillermo del Toro",
        actors: "Charlie Hunnam, Diego Klattenhoff, Idris Elba, Rinko Kikuchi",
        plot: "As a war between humankind and monstrous sea creatures wages on, a former pilot and a trainee are paired up to drive a seemingly obsolete special weapon in a desperate effort to save the world from the apocalypse.",
        posterUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3MTI5NjQ4Nl5BMl5BanBnXkFtZTcwOTU1OTU0OQ@@._V1_SX300.jpg",
    },
    {
        id: 96,
        title: "Kiss Kiss Bang Bang",
        year: "2005",
        runtime: "103",
        genres: ["Comedy", "Crime", "Mystery"],
        director: "Shane Black",
        actors: "Robert Downey Jr., Val Kilmer, Michelle Monaghan, Corbin Bernsen",
        plot: "A murder mystery brings together a private eye, a struggling actress, and a thief masquerading as an actor.",
        posterUrl:
            "http://ia.media-imdb.com/images/M/MV5BMTY5NDExMDA3M15BMl5BanBnXkFtZTYwNTc2MzA3._V1_SX300.jpg",
    },
    {
        id: 97,
        title: "The Quiet American",
        year: "2002",
        runtime: "101",
        genres: ["Drama", "Mystery", "Romance"],
        director: "Phillip Noyce",
        actors: "Michael Caine, Brendan Fraser, Do Thi Hai Yen, Rade Serbedzija",
        plot: "An older British reporter vies with a young U.S. doctor for the affections of a beautiful Vietnamese woman.",
        posterUrl:
            "http://ia.media-imdb.com/images/M/MV5BMjE2NTUxNTE3Nl5BMl5BanBnXkFtZTYwNTczMTg5._V1_SX300.jpg",
    },
    {
        id: 98,
        title: "Cloud Atlas",
        year: "2012",
        runtime: "172",
        genres: ["Drama", "Sci-Fi"],
        director: "Tom Tykwer, Lana Wachowski, Lilly Wachowski",
        actors: "Tom Hanks, Halle Berry, Jim Broadbent, Hugo Weaving",
        plot: "An exploration of how the actions of individual lives impact one another in the past, present and future, as one soul is shaped from a killer into a hero, and an act of kindness ripples across centuries to inspire a revolution.",
        posterUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTczMTgxMjc4NF5BMl5BanBnXkFtZTcwNjM5MTA2OA@@._V1_SX300.jpg",
    },
];

function App() {
    return (
        <>
            <MovieList movies={movies} />
        </>
    );
}

export default App;
