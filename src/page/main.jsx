import { useState } from "react"
import { Form } from "../components/Form"
import { TodoItem } from "../components/TodoItem"
import './Main.css'

export const Main = () => {

    const [Todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...Todos, todo]);
    }

    const editTodo = () => {
        alert('Opção editar está em fase de desenvolvimento')
    }

    const delTodo = (id) => {
        const filtered = Todos.filter((item) => item.id !== id);
        setTodos(filtered);
    }

    return (
        <>
            <div className="list">
                <div className="container">
                    <Form addTodo={addTodo} />
                    {
                        Todos.map((todo) => (
                            <div key={todo.id}>
                                < TodoItem todo={todo} editTodo={editTodo} delTodo={delTodo} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}