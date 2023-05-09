import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
    const [user_name, setName] = useState('');
    const [user_email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_9uo6v1v', 'template_0f95o54', event.target, 'esuCLEEj9dbDaKcWx')

        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <form id='msg-form' className='fade-in' onSubmit={handleSubmit}>

            <div id='form-split'>
                <div id='user-info'>
                    <div className='input'>
                        <label htmlFor="name" className='msg fade-in'>Name</label>
                        <input type="text" id="name" name="user_name" className='fade-in' value={user_name} onChange={(event) => setName(event.target.value)} required />
                    </div>
                    <div className='input'>
                        <label htmlFor="email" className='msg fade-in'>Email</label>
                        <input type="email" id="email" className='fade-in' name="user_email" value={user_email} onChange={(event) => setEmail(event.target.value)} required />
                    </div>
                </div>
                <div id='msg-content'>
                    <label htmlFor="message" className='msg fade-in'>Message</label>
                    <textarea id="message" className='fade-in' name="message" rows="5" value={message} onChange={(event) => setMessage(event.target.value)} required></textarea>
                </div>
            </div>
            <button id='toggle-view' className='tab fade-in' type="submit">Send</button>

        </form>
    );
}

export default ContactForm;
