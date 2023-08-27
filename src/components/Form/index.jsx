import { useState } from "react"
import "./Form.css"


// eslint-disable-next-line react/prop-types
export const Form = ({addTodo}) => {

    const [text, setText] = useState("");
    const [id, setId] = useState(0);

    const sendTodo = (e) => {
        e.preventDefault();
        if (text == '') {
            alert("Digite uma tarefa por favor!")
        } else {
        const obj = { text: text, id: id };
        addTodo(obj)
        setText('');
        setId(id + 1);
        }
    }

    return (
        <div className="div">
            <h2>Lista de Tarefas</h2>
            <form onSubmit={sendTodo}>
                <input onChange={(e)=>setText(e.target.value)} value={text} className="input" type="text" placeholder="Digite a sua Tarefa" />
                <input  className="btn" type="submit" value="adicionar"/>
            </form>
        </div>
    )
}