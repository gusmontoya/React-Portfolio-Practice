import React, {useState} from 'react';
import Modal from 'react-modal';
import Mailer from '../emailJS/EmailJS2';
import './modal.css.js';

// Modal.setAppElement('#root');

 function EmailModal() {
    const [modalIsOpen, setModalIsOpen] =  useState(false)
    return(
        <div>
            <button onClick={() => setModalIsOpen(true)}>Get in touch</button>
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} portalClassName="modal" > 
                    <div className="overlay">
                        <div className="modal-content">

                        <button onClick={() => setModalIsOpen(false)}>Close</button>
                        </div>
                        <Mailer />
                    </div>
                </Modal>
            
        </div>
    )
}

export default EmailModal;