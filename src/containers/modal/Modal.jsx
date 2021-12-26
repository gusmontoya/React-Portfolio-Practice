import React, {useState} from 'react';
import Modal from 'react-modal';
import Mailer from '../emailJS/EmailJS2';
import './modal.css';

// Modal.setAppElement('#root');

 function EmailModal() {
    const [modalIsOpen, setModalIsOpen] =  useState(false)
    return(
        <div>
            <button onClick={() => setModalIsOpen(true)}>Get in touch</button>
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                
                > 
                    <div className="overlay">
                        <div className="modal-content">

                        <button onClick={() => setModalIsOpen(false)}>Close</button>
                        </div>
                        <Mailer 
                        style={{
                            overlay: {
                                display: 'flex',
                                width: '400vw',
                                height: '600px',
                                backgroundColor: 'rgba(255,255,255,0,1)',
                                padding: '50px',
                                borderRadius: '5px',
                                backdropFilter: 'blur(30px)',
                                border: '2px solid transparent',
                                backgroundClip: 'padding-box',
                                boxShadow: '10px 10px 10px rgba(45, 55, 68, 0.0.3)',
                            }
                        }}
                        />
                    </div>
                </Modal>
            
        </div>
    )
}
// adding react modal: https://reactcommunity.org/react-modal/

// display="flex"
//                     width="400vw"
//                     height="600px"
//                     background-color="rgba(255,255,255,0,1)"
//                     padding="50px"
//                     border-radius="5px"
//                     backdrop-filter="blur(30px)"
//                     border="2px solid transparent"
//                     background-clip="padding-box"
//                     box-shadow="10px 10px 10px rgba(45, 55, 68, 0.0.3)"

export default EmailModal;