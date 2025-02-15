import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import { useTodos } from "./hooks/useTodos";

function App() {
    const [theme, setTheme] = useState("dark");
    const [filter, setFilter] = useState("all");
    const { todos, isLoading, addTodo, error } = useTodos();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    // const deleteTodo = (id) => {
    //     setTodos(todos.filter((todo) => todo.id !== id));
    // };

    // const editTodo = (id, newText) => {
    //     setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)));
    // };

    // const toggleTodoCompletion = (id) => {
    //     setTodos(
    //         todos.map((todo) => (todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo))
    //     );
    // };

    // const clearCompleted = () => {
    //     setTodos(todos.filter((todo) => !todo.isComplete));
    // };
    const itemsLeft = todos.filter((todo) => !todo.isComplete).length;
    const filteredTodos = todos.filter((todo) => {
        if (filter === "active") return !todo.isComplete;
        if (filter === "completed") return todo.isComplete;
        return true;
    });

    if (isLoading)
        return (
            <div className="flex justify-center items-center">
                <span className="loading loading-spinner"></span>
            </div>
        );
    if (error) return <p className="text-red-500 font-bold text-center">Error: {error.message}</p>;

    return (
        <div
            data-theme={theme}
            className="min-h-screen bg-base-100 font-[Josefin_Sans] bg-no-repeat"
            style={{
                backgroundImage: `url(/images/bg-desktop-${theme}.jpg)`,
                backgroundSize: "100vw 100vh",
            }}
        >
            <section className="container mx-auto px-4 pt-12 max-w-lg">
                {/* header */}
                <Header theme={theme} toggleTheme={toggleTheme} />
                <main>
                    {/* Todo List */}
                    <TodoList
                        todos={filteredTodos}
                        addTodo={addTodo}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                        toggleTodoCompletion={toggleTodoCompletion}
                    />
                    {/* Filter */}
                    <Filters
                        filter={filter}
                        setFilter={setFilter}
                        itemsLeft={itemsLeft}
                        clearCompleted={clearCompleted}
                    />
                </main>
            </section>
        </div>
    );
}

export default App;
