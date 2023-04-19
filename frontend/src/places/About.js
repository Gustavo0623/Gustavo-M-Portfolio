import { useState } from "react";
import Certificate from "../components/Certificate";
import College from "../components/College";
import HighSchool from "../components/HighSchool";

const About = () => {

    const [edu, setEdu] = useState(0)

    return (
        <main>
            <div className='about'>
                <div className='blur pad'>
                    <h1>Who Is Gustavo Martinez?</h1>
                    {/* potential showcase styling similar to home projects, to keep styling consistent */}
                    <h2 id='drop'>My Mission</h2>
                    <p className='msg'>
                        As a software developer, my mission is to use my skills and creativity to build innovative and user-friendly software solutions that make a positive impact on people's lives. 
                        I believe in constantly learning and adapting to new technologies and methodologies, and in working collaboratively with my team and clients to deliver high-quality results. 
                        My goal is to be a reliable and efficient partner for businesses and organizations looking to develop custom software that meets their specific needs. 
                        Through my work, I strive to create meaningful and sustainable solutions that not only solve problems but also inspire and delight users.
                    </p>
                </div>
            </div>
            <div className='about'>
                <div className='blur pad bottom'>
                    <h2>Background</h2>
                    <div id='bg-split'>
                        <div id='bg-content'>
                            <h3 id='edu'>Educational</h3>
                            <h3 id='prof'>Professional</h3>
                        </div>
                        {/* content component to be displayed here conditionally depending on click */}
                        <div id='bg-display'>
                            <div className='stack-group'>
                                <div className='milestone'>
                                    <strong className='msg' onClick={() => {setEdu(0)}}>{edu !== 0 ? 'H.S.' : 'HS Diploma'}</strong>
                                </div>
                                <div className='milestone'>
                                    <strong className='msg' onClick={() => {setEdu(1)}}>{edu !== 1 ? 'A.S.' : "Associate's Degree"}</strong>
                                </div>
                                <div className='milestone'>
                                    <strong className='msg' onClick={() => {setEdu(2)}}>{edu !== 2 ? 'P.C.' : 'Professional Certificate'}</strong>
                                </div>
                            </div>
                            {/* to become component */}
                            { edu === 0 ? <HighSchool/> : edu === 1 ? <College/> : edu === 2 ? <Certificate/> : null}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default About;