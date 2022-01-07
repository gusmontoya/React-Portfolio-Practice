import React from 'react';
import './reactmodal.scss';

import { BsFillPersonFill, BsPencilFill } from "react-icons/bs";
import { MdAlternateEmail, MdClose } from "react-icons/md";


const ReactModal = ({ show, close }) => {

    return (
        <> 
            {show ? (
                <div className={`modalContainer ${show? "show" : "" } `} onClick={() => close()}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <form action="form">
                            <header className="modal_header">
                                <h3 className="gradient__text">Get in touch, email me!</h3><br/>
                                <button className="close-btn close" onClick={() => close()}>
                                    <MdClose className="closeIcon" size={40} />
                                </button>
                            </header>
                            <div className="gradientBorder"></div>
                            <main className="modal_content">
                                <div class="input fullName">
                                    <BsFillPersonFill className="icon" size={50} />
                                    <input type="text" placeholder="full name"  required /><br/>
                                </div>
                                <div class="input email"> 
                                    <MdAlternateEmail className="icon" size={40} />
                                    <input type="email"  placeholder="email address"  required /><br/>
                                    
                                </div>
                                <div class="input message"> 
                                    <BsPencilFill className="icon" size={40} />
                                    <textarea name="message" placeholder="Message" required></textarea><br/>
                                </div>
                                <div class="input submit-btn"> 
                                    <input type="submit" value="Send" />
                                </div>
                            </main>
                        </form>
                    </div>
                </div>
            ): null}
        </>
    );
}

export default ReactModal;
