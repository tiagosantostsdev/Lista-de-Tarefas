/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Form.css";

export const Form = ({ addtodo }) => {
  const [text, setText] = useState("");
  const [id, setId] = useState(0);
  const [alert, setAlert] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      return setAlert("*Campo obrigatário");
    }
    setAlert("");
    const obj = { text: text, id: id };
    setId(id + 1);
    addtodo(obj);
    setText("");
  };
  return (
    <div className="main-container-form">
      <p>To do list</p>

      <form onSubmit={handleSubmit} className="container-form">
        <span>{alert}</span>
        <div>
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Type here"
          />
          <input type="submit" value="Add" />
        </div>
      </form>
    </div>
  );
};
