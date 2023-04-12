import { useState } from "react";
import Certificate from "../components/Certificate";
import College from "../components/College";
import HighSchool from "../components/HighSchool";

const About = () => {

    const [edu, setEdu] = useState(0)

    return (
        <main id='about'>
            <h1 id='title'>Who Is Gustavo Martinez?</h1>
            {/* potential showcase styling similar to home projects, to keep styling consistent */}
            <h2 id='drop'>My Mission</h2>
            <p className='msg'>
                As a software developer, my mission is to use my skills and creativity to build innovative and user-friendly software solutions that make a positive impact on people's lives. 
                I believe in constantly learning and adapting to new technologies and methodologies, and in working collaboratively with my team and clients to deliver high-quality results. 
                My goal is to be a reliable and efficient partner for businesses and organizations looking to develop custom software that meets their specific needs. 
                Through my work, I strive to create meaningful and sustainable solutions that not only solve problems but also inspire and delight users.
            </p>
            <h2 id='bg-abt'>Background</h2>
            <div id='bg-split'>
                <div id='bg-content'>
                    <h3>Educational</h3>
                    <h3>Professional</h3>
                </div>
                {/* content component to be displayed here conditionally depending on click */}
                <div id='bg-display'>
                    <div className='stack-group'>
                        <div className='milestone'>
                            <strong className='msg' onClick={() => {setEdu(0)}}>HS Diploma</strong>
                        </div>
                        <div className='milestone'>
                            <strong className='msg' onClick={() => {setEdu(1)}}>Associate's Degree</strong>
                        </div>
                        <div className='milestone'>
                            <strong className='msg' onClick={() => {setEdu(2)}}>Professional Certificate</strong>
                        </div>
                    </div>
                    {/* to become component */}
                    { edu === 0 ? <HighSchool/> : edu === 1 ? <College/> : edu === 2 ? <Certificate/> : null}
                </div>
            </div>
        </main>
    );
}

export default About;