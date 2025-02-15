import { useEffect, useState } from "react";
import { createTodo, getTodos } from "../api/endpoints/todos";
export const useTodos = () => {
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setError(null);
        const fetchTodos = async () => {
            try {
                const todosData = await getTodos();
                setTodos(todosData);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTodos();
    }, []);

    const addTodo = async (text) => {
        if (text.trim() === "") return;

        try {
            const newTodo = await createTodo({ text, isComplete: false });
            setTodos([...todos, newTodo]);
        } catch (error) {
            setError(error);
        }
    };

    return { todos, isLoading, error, addTodo };
};
