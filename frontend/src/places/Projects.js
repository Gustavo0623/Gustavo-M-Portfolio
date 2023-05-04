import { useState } from "react";
import FTDetails from "../components/FtDetails";
import GoDetails from "../components/GoDetails";

const Projects = () => {

    const [details, setDetails] = useState(false)
    const [front, setFront] = useState(true)
    const [project, setProject] = useState(0)

    return (
        <main data-speed='1'>
            <div className='about fade-in'>
                <div className='blur pad bottom'>
                    <h1 className='fade-in title'>A Glimpse Of What Is Possible</h1>
                    <div id='pro-tabs'>
                        <h2 className={front ? 'fade-in t-select equalize' : 'tab fade-in equalize'} onClick={()=> {setFront(true)}} >Front-End</h2>
                        <h2 className={!front ? 'fade-in t-select equalize' : 'tab fade-in equalize'} onClick={()=> {setFront(false)}} >Back-End</h2>
                    </div>
                    <div id='pro-split'>
                        <div id='bg-content'>
                            {/* showcase similar to home and about */}
                            <h3 className={project === 0 ? 'fade-in select' : 'tab fade-in'} onClick={()=>{setProject(0)}}>Fit-Track</h3>
                            <h3 className={project === 1 ? 'fade-in select' : 'tab fade-in'} onClick={()=>{setProject(1)}}>Go-Bird-Go</h3>
                        </div>
                        <div id='bg-display'>
                            <div id='pro-display'>
                                { !details ? project === 0 ? <img src='./Photos/Screen Shot 2023-01-18 at 10.19.13 PM (2).jpg' alt='Selected App Screenshot' id='proj-photo' className='fade-in'/>: project === 1 ? <img src='./Photos/Screen Shot 2023-04-30 at 5.43.32 PM.png' alt='Selected App Screenshot' id='proj-photo'/> : null : null}
                                { !details ? <button id='toggle-view' className='gap tab fade-in' onClick={()=>{setDetails(true)}}> Details </button> : <button id='toggle-view' className='tab fade-in' onClick={()=>{setDetails(false)}}> Project Photo </button>}
                                {/* Update to include GoDetails component!!! */}
                                { details ? project === 0 ? <FTDetails/> : project === 1 ? <GoDetails/> : null : null }
                            </div>
                            <div className='separate gap fade-in'>
                                <div className='join'>
                                    <img src='./Photos/icons8-github-94.png' alt='place marker' className='place-mark i-grow'/>
                                    <a href={ project === 0 ? 'https://github.com/proptechnovator/fittrack-v2' : 'https://github.com/Gustavo0623/Go-Bird-Go' } className='half proj-link proj link tab'> Code </a>
                                </div>
                                <div className='half proj-link proj' id='live'>
                                    { project === 0 ? <a href='https://fittrack-frontend.herokuapp.com/' className='link tab'>Live Demo</a> : project === 1 ? <p className='select' id='invalid'>Demo Coming Soon!</p> : null}
                                </div>
                            </div>
                            <p id='pro-link' className='fade-in'> 
                                Like what you see?
                                <br/> 
                                <a href='/contact' className='link tab fade-in'> Contact Me!</a>
                            </p>
                        </div>
                    </div>
                </div> 
            </div>
        </main>
    );
}

export default Projects;