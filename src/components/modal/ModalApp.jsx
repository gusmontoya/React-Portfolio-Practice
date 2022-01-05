import { useState } from "react";
import ReactModal from "../../containers/modal/ReactModal";
import "./modalapp.css";

function ModalApp() {
  const [modal, setModal] = useState(false);

  const Toggle = () => setModal(!modal);

  return (
    <div className="gpt3__header-content__input">
      
      <button className="clickMe" onClick={() => Toggle()}>Get in touch</button>

      <ReactModal show={modal} close={Toggle} />
    </div>
  );
}


// installed
// react icons ; npm install react-icons --save
// react sass; npm i node-sass
// React portals


export default ModalApp;
