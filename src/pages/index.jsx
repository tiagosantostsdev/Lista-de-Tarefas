import { AiOutlineDelete } from "react-icons/ai"; 
import { FaRegEdit } from "react-icons/fa"; 
import { AiOutlineCheckCircle } from "react-icons/ai";  
import { ImRadioUnchecked } from "react-icons/im"; 
import "./main.css";

export const Main = () => {
  return (
    <>
      <div className="main-container-form">
        <div className="container-form">
          <input type="text" placeholder="Type here" />
          <input type="button" value="Send"/>
              </div>
              <div className="todolist">
                  <div className="list">
                       <i className="list-check"><ImRadioUnchecked /></i>{/*<AiOutlineCheckCircle /> */}
                      <div className="list-text">text list here</div>
                      <div className="list-icones">
                          <i className="list-icone-edit"><FaRegEdit /></i>
                          <i className="list-icone-del"><AiOutlineDelete /></i>
                      </div>
                  </div>
              </div>
      </div>
    </>
  );
};
