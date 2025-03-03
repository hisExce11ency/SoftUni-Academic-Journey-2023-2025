import { useEffect, useState } from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList() {
    const [todos, setTodos] = useState([]);

    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3030/jsonstore/todos")
            .then((res) => res.json())
            .then((data) => {
                // console.log("Получени данни от сървъра:", data); // 🛠️ Debug log
                const result = Object.values(data);
                setTodos(result);
                setIsPending(false);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    //* Chang only on the UI
    // const statusChangeHandler = (todoId) => {
    //     //HARDCORE
    //     setTodos((oldTodos) =>
    //         oldTodos.map((t) =>
    //             t._id === todoId ? { ...t, isCompleted: !t.isCompleted } : t
    //         )
    //     );
    // };

    const statusChangeHandler = (todoId, currentStatus) => {
        const updatedStatus = !currentStatus;

        const todoToUpdate = todos.find((t) => t._id === todoId);
        if (!todoToUpdate) return;

        const updatedTodo = { ...todoToUpdate, isCompleted: updatedStatus };

        fetch(`http://localhost:3030/jsonstore/todos/${todoId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedTodo),
        })
            .then((res) => res.json())
            .then(() => {
                setTodos((oldTodos) =>
                    oldTodos.map((t) => (t._id === todoId ? updatedTodo : t))
                );
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    return (
        <section className="todo-list-container">
            <h1>Todo List</h1>

            <div className="add-btn-container">
                <button className="btn">+ Add new Todo</button>
            </div>

            <div className="table-wrapper">
                {/* <!-- Loading spinner - show the load spinner when fetching the data from the server--> */}
                {isPending && (
                    <div className="loading-container">
                        <div className="loading-spinner">
                            <span className="loading-spinner-text">
                                Loading
                            </span>
                        </div>
                    </div>
                )}

                {/* <!-- Todo list table --> */}
                <table className="table">
                    <thead>
                        <tr>
                            <th className="table-header-task">Task</th>
                            <th className="table-header-status">Status</th>
                            <th className="table-header-action">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- Todo item --> */}
                        {todos.map((todo) => (
                            <TodoListItem
                                key={todo._id}
                                _id={todo._id}
                                text={todo.text}
                                isCompleted={todo.isCompleted}
                                onStatusChange={statusChangeHandler}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
