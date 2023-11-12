import React, { useState, useContext } from "react";
import FTDetails from "../components/FtDetails";
import GoDetails from "../components/GoDetails";
import { NavContext } from '../App';

const Projects = () => {

    const { navState } = useContext(NavContext);
    const [details, setDetails] = useState(false)
    const [front, setFront] = useState(true)
    const [project, setProject] = useState(0)

    return (
        <main data-speed='1'>
            <div className='about fade-in'>
                <div className={navState ? 'blur pad-xp bottom' : 'blur pad bottom'}>
                    <h1 className='fade-in title'>A Glimpse Of What Is Possible</h1>
                    <div id='pro-tabs'>
                        <h3 className={front ? 'fade-in t-select equalize' : 'tabs fade-in equalize'} onClick={()=> {setFront(true)}} >Front-End</h3>
                        <h3 className={!front ? 'fade-in t-select equalize' : 'tabs fade-in equalize'} onClick={()=> {setFront(false)}} >Back-End</h3>
                    </div>
                    <div id='pro-split'>
                        <div id='bg-content'>
                            {/* showcase similar to home and about */}
                            <strong className={project === 0 ? 'drop fade-in select' : 'drop tabs fade-in'} onClick={()=>{setProject(0)}}>Fit-Track</strong>
                            <strong className={project === 1 ? 'drop fade-in select' : 'drop tabs fade-in'} onClick={()=>{setProject(1)}}>Go-Bird-Go</strong>
                        </div>
                        <div id='bg-display'>
                            <div id='pro-display'>
                                { !details ? project === 0 ? <img src='./Photos/Screen Shot 2023-01-18 at 10.19.13 PM (2).jpg' alt='Selected App Screenshot' id='proj-photo' className='fade-in'/>: project === 1 ? <img src='./Photos/Screen Shot 2023-04-30 at 5.43.32 PM.png' alt='Selected App Screenshot' id='proj-photo' className="fade-in"/> : null : null}
                                { !details ? <button id='toggle-view' className='gap tab msg fade-in' onClick={()=>{setDetails(true)}}> Details </button> : <button id='toggle-view' className='tab msg fade-in' onClick={()=>{setDetails(false)}}> Project Photo </button>}
                                {/* Update to include GoDetails component!!! */}
                                { details ? project === 0 ? <FTDetails/> : project === 1 ? <GoDetails/> : null : null }
                            </div>
                            <div className='separate gap fade-in'>
                                <div className='join'>
                                    <img src='./Photos/icons8-github-94.png' alt='place marker' className='place-mark i-grow'/>
                                    <a href={ project === 0 ? 'https://github.com/proptechnovator/fittrack-v2' : 'https://github.com/Gustavo0623/Go-Bird-Go' } className='half proj-link msg link tab'> Code </a>
                                </div>
                                <div className='half proj-link' id='live'>
                                    { project === 0 ? <a href='https://fittrack-frontend.herokuapp.com/' className='link msg tab'>Live Demo</a> : project === 1 ? <p className="msg" id='invalid'>Demo Coming Soon!</p> : null}
                                </div>
                            </div>
                            <p id='pro-link' className='msg fade-in'> 
                                Like what you see?
                                <br/> 
                                <a href='/contact' className='link tab msg fade-in'> Contact Me!</a>
                            </p>
                        </div>
                    </div>
                </div> 
            </div>
        </main>
    );
}

export default Projects;