import React from 'react';
import ContactForm from '../components/Form';

const Contact = () => {
    return (
        <main id='about'>
            <h1>Contact Me</h1>
            <div id='msg-area'>
                <h2 id='drop'>Drop Me a Message</h2>
                <ContactForm/>
            </div>

            <div id='socials'>
                <h2 id='drop'>Follow Me To Stay Updated</h2>
            </div>
        </main>
    );
}

export default Contact;