import React from 'react';
import ContactForm from '../components/Form';

const Contact = () => {
    return (
        <main className='about fade-in'>
            <div className='blur pad'>
                <h1>Contact Me</h1>
                <div id='msg-area'>
                    <h2 id='drop'>Drop Me a Message</h2>
                    <ContactForm/>
                </div>
            </div>

            <div id='socials' className='blur pad bottom'>
                <h2 id='drop'>Follow Me To Stay Updated</h2>
                <div className='stack-group'>
                    <a href='https://www.linkedin.com/in/gustavo-martinez-765940204/'>
                        <img src='./Photos/icons8-linkedin-94.png' alt='linkedin' className='icon h-shrink'/>
                    </a>
                    <a href='https://github.com/Gustavo0623'>
                        <img src='./Photos/icons8-github-94.png' alt='github' className='icon h-shrink'/>
                    </a>
                    <a href='https://twitter.com/Gogusfitness'>
                        <img src='./Photos/icons8-twitter-circled-94.png' alt='github' className='icon h-shrink'/>
                    </a>
                    <a href='https://www.instagram.com/go.gus.06/'>
                        <img src='./Photos/icons8-instagram-94.png' alt='github' className='icon h-shrink'/>
                    </a>
                </div>
            </div>
        </main>
    );
}

export default Contact;