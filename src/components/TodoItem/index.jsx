/* eslint-disable react/prop-types */
import { AiOutlineDelete, AiOutlineCheckCircle } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { CgRadioCheck } from "react-icons/cg";
import './TodoItem.css'
import { useState } from "react";

export const TodoItem = ({ todo, delTodo, editTodo }) => {

    const getId = () => {
        delTodo(todo.id)
    }

    const getText = () => {
        editTodo(todo.text)
    }

    const [status, setStatus] = useState(<CgRadioCheck />);

    function handleClick() {
        setStatus(!status);
    }

    return (
        <>
            <div className={`Container ${status ? "" : "feito"}`}>
                <div className="btn_concludes">
                    <button onClick={handleClick}>{status ? <CgRadioCheck /> : <AiOutlineCheckCircle />}</button>
                </div>
                <p>{todo.text}</p>
                <div className="Buttons">
                    <button onClick={getText} className="btn_edit"><BiEdit /></button>
                    <button onClick={getId} className="btn_del"><AiOutlineDelete /></button>
                </div>
            </div>
        </>
    )
}