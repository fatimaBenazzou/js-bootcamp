import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import { useState } from "react";

function TodoList({ todos, addTodo, editTodo, deleteTodo, toggleTodoCompletion }) {
    const [newTodo, setNewTodo] = useState("");
    const handleAddTodo = () => {
        addTodo(newTodo);
        setNewTodo("");
    };

    return (
        <>
            <div className="card bg-base-100 shadow-lg p-4 mb-4 rounded-lg">
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Create a new todo..."
                        className="flex-1 input input-ghost w-full"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
                    />
                    <button
                        onClick={handleAddTodo}
                        className="btn btn-circle btn-sm btn-ghost border border-gray-500 "
                    >
                        <span className="icon-[iwwa--add] text-base-content"></span>
                    </button>
                </div>
            </div>
            <ul className="card bg-base-100 shadow-lg rounded-lg">
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                        toggleTodoCompletion={toggleTodoCompletion}
                    />
                ))}
            </ul>
        </>
    );
}
TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            isComplete: PropTypes.bool.isRequired,
            id: PropTypes.string.isRequired,
        })
    ).isRequired,
    addTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleTodoCompletion: PropTypes.func.isRequired,
};

export default TodoList;
