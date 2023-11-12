import React, { useState, useContext } from "react";
import FTDetails from "../components/FtDetails";
import GoDetails from "../components/GoDetails";
import { NavContext } from '../App';
import GWDetails from "../components/GWSD";
import FTBE from "../components/FtBE";
import GBGS from "../components/GBGS";

const Projects = () => {

    const { navState } = useContext(NavContext);
    const [front, setFront] = useState(true)
    const [project, setProject] = useState(0)

    return (
        <main data-speed='1'>
            <div className='about fade-in'>
                <div className={navState ? 'blur pad-xp bottom' : 'blur pad bottom'}>
                    <h1 className='fade-in title'>A Glimpse Of What Is Possible</h1>
                    <div id='pro-tabs'>
                        <h3 className={front ? 'fade-in t-select equalize' : 'tabs fade-in equalize'} onClick={()=> {setFront(true); setProject(0)}} >Front-End</h3>
                        <h3 className={!front ? 'fade-in t-select equalize' : 'tabs fade-in equalize'} onClick={()=> {setFront(false); setProject(0)}} >Back-End</h3>
                    </div>
                    <div id='pro-split'>
                        { front ? 
                            <div id='bg-content'>
                                {/* showcase similar to home and about */}
                                <b className={project === 0 ? 'drop fade-in select' : 'drop tabs fade-in'} onClick={()=>{setProject(0)}}>Go White SD</b>
                                <b className={project === 1 ? 'drop fade-in select' : 'drop tabs fade-in'} onClick={()=>{setProject(1)}}>Fit-Track</b>
                                <b className={project === 2 ? 'drop fade-in select' : 'drop tabs fade-in'} onClick={()=>{setProject(2)}}>Go-Bird-Go</b>
                            </div>
                            :
                            <div id='bg-content'>
                                {/* showcase similar to home and about */}
                                <b className={project === 0 ? 'drop fade-in select' : 'drop tabs fade-in'} onClick={()=>{setProject(0)}}>Fit-Track Server</b>
                                <b className={project === 1 ? 'drop fade-in select' : 'drop tabs fade-in'} onClick={()=>{setProject(1)}}>Go-Bird-Go Server</b>
                            </div>
                        }
                        <div id='bg-display'>
                            {front ? 
                                <div id='pro-display'>
                                    { project === 0 ? <img src='./Photos/GWSD.png' alt='Selected App Screenshot' id='proj-photo' className='fade-in'/> : project === 1 ? <img src='./Photos/Screen Shot 2023-01-18 at 10.19.13 PM (2).jpg' alt='Selected App Screenshot' id='proj-photo' className='fade-in'/>: project === 2 ? <img src='./Photos/Screen Shot 2023-04-30 at 5.43.32 PM.png' alt='Selected App Screenshot' id='proj-photo' className="fade-in"/> : null}
                                    <div className='separate gap fade-in'>
                                        <div className='join'>
                                            { project !== 0 ? <img src='./Photos/icons8-github-94.png' alt='place marker' className='place-mark i-grow'/> : null}
                                            { project !== 0 ? <a href={ project === 1 ? 'https://github.com/proptechnovator/fittrack-v2' : project === 2 ? 'https://github.com/Gustavo0623/Go-Bird-Go' : null} className='half proj-link msg link tab'> Code </a> : <b className='half msg proj-link'>No Code Solution</b>}
                                        </div>
                                        <div className='half proj-link' id='live'>
                                            { project === 0 ? <a href='https://gowhitesd.com' className='link msg tab'>Live Site</a> : project === 1 ? <a href='https://fittrack-frontend.herokuapp.com/' className='link msg tab'>Live Demo</a> : project === 2 ? <p className="msg" id='invalid'>Demo Coming Soon!</p> : null}
                                        </div>
                                    </div>
                                    { project === 0 ? <GWDetails/> : project === 1 ? <FTDetails/> : project === 2 ? <GoDetails/> :null}
                                </div>
                            :
                                <div id='pro-display'>
                                    <div className='separate gap fade-in'>
                                        <div className='join'>
                                            <a href={ project === 0 ? 'https://github.com/proptechnovator/fittrack-v2/tree/deploy-backend' : project === 1 ? 'https://github.com/Gustavo0623/go-bird-go-backend' : null} className='half proj-link msg link tab'> API Source Code </a>
                                        </div>
                                    </div>
                                    {project === 0 ? <FTBE/> : project === 1 ? <GBGS/> : null}
                                </div>
                            }
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