import { useEffect } from "react";
import gameService from "../../services/gameService";
import { useState } from "react";
import GameCatalogItem from "./game-catalog-item/GameCatalogItem";

{
    /*
<!-- Catalogue -->
*/
}
export default function GameCatalog() {
    const [games, setGames] = useState([]);
    useEffect(() => {
        gameService.getAll().then(setGames);
        // .then((result) => {
        //     setGames(result);
        // console.log(result);
        // });
    }, []);
    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {/*
    <!-- Display div: with information about every game (if any) -->
    */}
            {games.map((game) => (
                <GameCatalogItem key={game._id} {...game} />
            ))}

            {/*
    <!-- Display paragraph: If there is no games  -->
    */}
            <h3 className="no-articles">No articles yet</h3>
        </section>
    );
}
