/* eslint-disable react/prop-types */
import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { CiCircleCheck } from "react-icons/ci";
import { CgRadioCheck } from "react-icons/cg";
import "./Todolist.css";
import { useState } from "react";
import { Dialog } from "../DialogForm";

export const TodoList = ({item, handleDel}) => {
  const [status, setStatus] = useState(true);
  const [open, setOpen] = useState(false);

  function handleCheckClick() {
    setStatus(!status);
  }

  function handleEdit() {
    setOpen(true)
  }

  function getId() {
    handleDel(item.id)
  }

  return (
    <>
      {open &&
        <Dialog
        setOpen={setOpen}
        item={item}
        />
      }
      
      <div 
        className={status ? "liststodo-container" : "liststodoChecked-container"}
      >
        <span className="list-check">
          <i onClick={handleCheckClick}>
            {status ? <CgRadioCheck /> : <CiCircleCheck />}
          </i>
        </span>
              <p className="list-text">{item.text}</p>
        <span className="list-icones">
          <i onClick={handleEdit} className="edit">
            <BiEdit />
          </i>
          <i onClick={getId} className="del">
            <AiOutlineDelete />
          </i>
        </span>
      </div>
    </>
  );
};
