import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import gameService from "../../services/gameService";
import DisplayComents from "../comments-display/DisplayComments";
import AddComent from "../add-comments/AddComment";

{
    /*
<!--Details Page-->
*/
}
export default function GameDetails() {
    const navigate = useNavigate();
    const [game, setgame] = useState({});
    const { gameId } = useParams();

    useEffect(() => {
        //Immediately Invoked async arrow function expression
        (async () => {
            const result = await gameService.getOne(gameId);
            setgame(result);
        })();
    }, [gameId]);
    const gameDeleteClickHandler = async () => {
        const hasConfirm = confirm(
            `Are you sure you want to delete ${game.title} game?`
        );
        if (!hasConfirm) {
            return;
        }
        await gameService.delete(gameId);
        navigate("/games");
    };
    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel:{game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">{game.summary}</p>

                <DisplayComents />

                {/*
        <!-- Edit/Delete buttons ( Only for creator of this game )  -->
        */}
                <div className="buttons">
                    <Link to={`/games/${gameId}/edit`} className="button">
                        Edit
                    </Link>
                    <button onClick={gameDeleteClickHandler}>
                        <a className="button">Delete</a>
                    </button>
                </div>
            </div>
            <AddComent />
        </section>
    );
}
