import React from "react";
import ReactDOM from "react-dom";

const Modal = ({isShowing, hide}) =>
isShowing
? ReactDOM.createPortal(
    <>
    <div className="overlay"></div>
      <div className="modal_container">
        <i className="far fa-times-circle"></i>
        <div className="'content_modal_container">
          <h2 className="modal_title">Modal HRnet</h2>
          <p className="text">
            Vous pouvez cliquer sur le bouton "close" ou en dehors de la fenêtre
            pour fermer la modal
          </p>
        </div>
    </div>
    </>,document.body
    ):
    null;

    export default Modal;
