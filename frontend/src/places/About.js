import React, { useState, useContext } from "react";
import Education from "../components/Education";
import Work from "../components/Work";
import { NavContext } from '../App';

const About = () => {

    const { navState } = useContext(NavContext);
    const [edu, setEdu] = useState(true)

    return (
        <main data-speed='1'>
            <div className='about fade-in'>
                <div className={navState ? 'blur pad-xp' : 'blur pad'}>
                    <h1 className='fade-in title'>Who Is Gustavo Martinez?</h1>
                    {/* potential showcase styling similar to home projects, to keep styling consistent */}
                    <h2 id='drop' className='fade-in title'>My Mission</h2>
                    <p className='msg fade-in'>
                        As a software developer, my mission is to use my skills and creativity to build innovative and user-friendly software solutions that make a positive impact on people's lives. 
                        I believe in constantly learning and adapting to new technologies and methodologies, and in working collaboratively with my team and clients to deliver high-quality results. 
                        My goal is to be a reliable and efficient partner for businesses and organizations looking to develop custom software that meets their specific needs. 
                        Through my work, I strive to create meaningful and sustainable solutions that not only solve problems but also inspire and delight users.
                    </p>
                </div>
            </div>
            <div className='about'>
                <div className='blur pad bottom'>
                    <h2 className='fade-in title'>Background</h2>
                    <div id='bg-split'>
                        <div id='bg-content'>
                            <h3 className={edu ? 'fade-in select t-title' : 'tab fade-in t-title'} onClick={()=>{setEdu(true)}}>Education</h3>
                            <h3 className={!edu ? 'fade-in select t-title' : 'tab fade-in t-title'} onClick={()=>{setEdu(false)}}>Work</h3>
                        </div>
                        {/* content component to be displayed here conditionally depending on click */}
                        {edu ? <Education/> : <Work/> }
                    </div>
                </div>
            </div>
        </main>
    );
}

export default About;