import React, { useContext } from 'react';
import ContactForm from '../components/Form';
import { NavContext } from '../App';

const Contact = () => {

    const { navState } = useContext(NavContext);

    return (
        <main className='about' data-speed='1'>
            <div className={navState ? 'blur pad-xp' : 'blur pad'}>
                <h1 className='fade-in title'>Contact Me</h1>
                <div id='msg-area'>
                    <h2 className='drop fade-in title'>Drop Me a Message</h2>
                    <ContactForm/>
                </div>
            </div>

            <div id='socials' className='blur pad bottom'>
                <h2 className='drop fade-in title'>Follow Me To Stay Updated</h2>
                <div className='stack-group fade-in'>
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