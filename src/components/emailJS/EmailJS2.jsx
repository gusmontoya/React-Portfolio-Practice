import emailjs from "emailjs-com";
import setModalIsOpen from '../../containers/modal/Modal';
import form from 'react';
// import '../modal/modal.css';

const mailer = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_u8nkavy', form.current, 'user_HJ596D5pqz1edfJAmEVFt')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };


    return (
        <div className="emailForm">
            <h3>Get in touch form</h3>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                    <input type="text" name="user_name" />
                <label>Email</label>
                    <input type="email" name="user_email" />
                <label>Message</label>
                    <textarea name="message" />
            {/* <input type="submit" value="Send" /> */}
            <button onClick={() => setModalIsOpen(false)}>Send</button>
            </form>
        </div>
      );
}

export default mailer;