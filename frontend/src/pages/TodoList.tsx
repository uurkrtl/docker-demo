import {Todo} from "../types/Todo.ts";
import {useEffect, useState} from "react";
import TodoService from "../services/TodoService.ts";


function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const todoService = new TodoService();
        todoService.getAllTodos().then((response) => {
            setTodos(response.data);
        });
    });

    return (
        <div className={'container'}>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Status</th>
                </tr>
                </thead>
                <tbody>
                {todos.map((todo) => {
                    return (
                        <tr key={todo.id}>
                            <td>{todo.description}</td>
                            <td>{todo.status}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}

export default TodoList;