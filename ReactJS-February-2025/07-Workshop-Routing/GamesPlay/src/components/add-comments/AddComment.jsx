{
    /*
    <!-- Bonus -->
    */
}
{
    /*
    <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
    */
}
export default function AddComent() {
    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form">
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input
                    className="btn submit"
                    type="submit"
                    value="Add Comment"
                />
            </form>
        </article>
    );
}
