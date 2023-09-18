import { useState } from "react";
import { Form } from "../components/Form";
import { TodoList } from "../components/TodoList";
import "./main.css";

export const Main = () => {
  const [data, setData] = useState([]);

  const addtodo = (addtodo) => {
    setData([...data, addtodo]);
  };

  function handleDel(id) {
    const filtered = (data.filter((item) => item.id !== id))
    setData(filtered)
  }

  return (
    <div className="mainPage">
      <Form addtodo={addtodo} />
      <div className={data >= 0 ? "" : "main-container"}>
        {
          data.map((item) => (
            <span key={item.id}>
              <TodoList item={item} handleDel={handleDel} />
            </span>
          ))
        }
      </div>
    </div>
  )
}
