import styles from "./TodoListItem.module.css";

export default function TodoListItem({
    _id,
    text,
    isCompleted,
    onStatusChange,
}) {
    //*option 1
    // const todoClassName = isCompleted ? styles["is-completed"] : styles["todo"];

    //*option 2
    // const todoClassName = [
    //     styles["todo"],
    //     isCompleted && styles["is-completed"],
    // ].join(" ");

    //*option 3 in this option .join(" ") is used at className property
    const todoClassName = [styles["todo"]];
    if (isCompleted) {
        todoClassName.push(styles["is-completed"]);
    }

    return (
        <tr className={todoClassName.join(" ")}>
            <td>{text}</td>
            <td>{isCompleted ? "Completed" : "Incomplete"}</td>
            <td className={styles["todo-action"]}>
                <button
                    onClick={() => onStatusChange(_id, isCompleted)}
                    className={"btn" + " " + styles["todo-btn"]}
                >
                    Change status
                </button>
            </td>
        </tr>
    );
}
