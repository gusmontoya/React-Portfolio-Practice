import React, {useState} from 'react';
import Modal from 'react-modal';
import './modal.css';

Modal.setAppElement('#root');

function Modal() {
    const [modalIsOpen, setModalIsOpen] =  useState(false)
    return(
        <div className="modal">
            <button onClick={() => setModalIsOpen(true)}>Contact Me</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
            style={
                overlay: {
                    backgroundColor: 'grey'
                },
                content: {
                    color: 'orange'
                }
            }>
                <h2>Modal title</h2>
                <p>Modal Body</p>
                <div>
                    <button onClick={() => setModalIsOpen(false)}>Send</button>
                </div>
            </Modal>
        </div>
    )
}
// adding react modal: https://reactcommunity.org/react-modal/
export default Modal;