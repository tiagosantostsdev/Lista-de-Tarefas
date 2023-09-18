/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Dialog.css";

export const Dialog = ({ setOpen, item }) => {
  const [value, setValue] = useState(item.text);

  function handleClose() {
    setOpen(false);
  }
    function handleSubmit(e) {
        e.preventDefault()
        setValue(item.text = value)
        handleClose();
    }
  return (
    <div className="dialog-container">
      <div className="dialog-form">
        <p>Edit to do</p>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
        value={value}
        />
        <div className="button">
          <input onClick={handleClose} type="submit" value="Cancel" />
          <input onClick={handleSubmit} type="submit" value="Salve" />
        </div>
      </div>
    </div>
  );
};
