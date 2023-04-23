import { useState } from "react";
import FTDetails from "../components/FtDetails";

const Projects = () => {

    const [details, setDetails] = useState(false)

    return (
        <main>
            <div className='about fade-in'>
                <div className='blur pad bottom'>
                    <h1 className='fade-in title'>A Glimpse Of What Is Possible</h1>
                    <div id='pro-tabs'>
                        <h2 className='tab fade-in'>Front-End</h2>
                        <h2 className='tab fade-in'>Back-End</h2>
                    </div>
                    <div id='pro-split'>
                        <div id='bg-content'>
                            {/* showcase similar to home and about */}
                            <h3 className='tab fade-in'>Fit-Track</h3>
                            <h3 className='tab fade-in'>Go-Bird-Go</h3>
                        </div>
                        <div id='bg-display'>
                            <div id='pro-display'>
                                { !details ? <img src='./Photos/Screen Shot 2023-01-18 at 10.19.13 PM (2).jpg' alt='Selected App Screenshot' id='proj-photo' className='fade-in'/> : null}
                                { !details ? <button id='toggle-view' className='gap tab fade-in' onClick={()=>{setDetails(true)}}> Details </button> : <button id='toggle-view' className='tab fade-in' onClick={()=>{setDetails(false)}}> Project Photo </button>}
                                { details ? <FTDetails/>: null}
                            </div>
                            <div className='separate'>
                                <div className='join fade-in'>
                                    <img src='./Photos/icons8-github-94.png' alt='place marker' className='place-mark i-grow'/>
                                    <a href='https://github.com/proptechnovator/fittrack-v2' className='half proj-link proj link tab'> Code </a>
                                </div>
                                <p className='half proj-link proj fade-in' id='live'>
                                    <a href='https://fittrack-frontend.herokuapp.com/' className='link tab'>Live Demo</a>
                                </p>
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