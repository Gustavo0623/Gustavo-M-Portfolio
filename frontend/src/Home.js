import React, { useState, useContext } from 'react'
import { NavContext } from './App';

const Home = () => {

    const { navState } = useContext(NavContext);

    const [isHovering, setIsHovering] = useState(false);
    const [s1, setS1] = useState(false);
    const [s2, setS2] = useState(false);
    const [s3, setS3] = useState(false);
    const [s4, setS4] = useState(false);
    const [project, setProject] = useState(0)


    const handleMouseClick = () => {
        setIsHovering(true);
    };

    const resetStates = () => {
        isHovering ? setIsHovering(false) :
        s1 ? setS1(false) :
        s2 ? setS2(false) :
        s3 ? setS3(false) :
        setS4(false) 
    }

    const delayReset = setTimeout(() => {
        clearTimeout(delayReset)
        resetStates()
    }, 5000)

    return (
        <main data-speed='1'>
            <div className='scroll'>
                <div id={navState ? 'intro-xp' : 'intro'} className='fade-in'>
                    <div id='title'>
                        <h1 className='title fade-in'> Full Stack Software Developer </h1>
                    </div>
                    <div className='split fade-in'>
                        <div className='info'>
                            <p className='description fade-in'> Full Stack Software Developer breaking into the tech industry. </p>
                            <div className='join fade-in'>
                                <img src='./Photos/icons8-place-marker-94.png' alt='place marker' className='place-mark'/>
                                <p className='description'>Spring Valley, California, USA</p>
                            </div>
                            <a href='/about' className='link fade-in description tab'>More About Me!</a>
                            
                            <div className='icons' id='li-gh'>
                                {
                                // <p> tags = temporary. replace with LinkedIn and Github icon links  
                                }
                                <a href='https://www.linkedin.com/in/gustavo-martinez-765940204/'>
                                    <img src='./Photos/icons8-linkedin-94.png' alt='linkedin' className='icon h-shrink'/>
                                </a>
                                <a href='https://github.com/Gustavo0623'>
                                    <img src='./Photos/icons8-github-94.png' alt='github' className='icon h-shrink'/>
                                </a>
                            </div>
                        </div>
                        <img id='portrait' src='./Photos/portrait.png' alt='Portrait of Gustavo Martinez'/>
                    </div>

                    <div id='t-stack'>
                        <p className='t-title title fade-in'> Tech Stack </p>
                        <div className='stack-group fade-in'>
                            <img src='./Photos/icons8-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-48.png' alt='HTML5 logo' className={isHovering ? 'spin icon shrink' : 'icon shrink'} onClick={()=>{resetStates(); handleMouseClick()}}/>
                            <img src='./Photos/icons8-cascading-style-sheets-language-used-for-describing-the-presentation-of-a-document-48.png' alt='CSS3 logo' className={s1 ? 's-1 icon shrink' : 'icon shrink'} onClick={()=> {resetStates(); setS1(true)}} />
                            <img src='./Photos/icons8-javascript-48.png' alt='javascript logo' className={s2 ? 's-2 icon' : 'icon'} onClick={()=> {resetStates(); setS2(true)}}/>
                            <img src='./Photos/icons8-react-100.png' alt='React logo' className={s3 ? 's-3 icon' : 'icon'} onClick={()=> {resetStates(); setS3(true)}}/>
                            <img src='./Photos/icons8-sql-64.png' alt='SQL logo' className={s4 ? 's-4 icon i-grow' : 'icon i-grow'} onClick={()=> {resetStates(); setS4(true)}}/>
                        </div>
                        <p id='value' className={isHovering | s1 | s2 | s3 | s4 ? 't-title t-fast msg' : ''}> { isHovering ? 'HTML5' : s1 ? 'CSS3' : s2 ? 'Javascript' : s3 ? 'React.js' : s4 ? 'SQL' : '' }</p>
                    </div>
                </div>

                {/* Work Status */}
                <div id='w-status' className=''>
                    <div id='otw'>
                        <h2 className='title fade-in'> Open To Work! </h2>
                        <p className='msg fade-in'> 
                            I am currently seeking 
                            <strong> Entry Level </strong> 
                            positions in
                            <strong> Software Engineering/ Development, Front End/ Back End Web Development, Full Stack Development, React Application Development </strong>
                            (as well as other languages listed in my Tech Stack), and
                            <strong> UI/ UX Design.</strong>
                        </p>
                    </div>
                </div>

                {/* project display */} 
                <div id='proj-home' className=''> 
                    <h2 className='title fade-in'> Project Highlights </h2>
                    <div id='showcase'>
                        <div className='left-show fade-in'>    
                            <div id='selector'>
                                <h3 className={project === 0 ? 'proj msg select' : 'proj msg tab' } onClick={()=>{setProject(0)}} >Fit-Track</h3>
                                <h3 className={project === 1 ? 'proj msg select' : 'proj msg tab' } onClick={()=>{setProject(1)}} >Go-Bird-Go</h3>
                                <a href='/projects' className='proj-link proj msg link tab'>More Projects!</a>
                            </div>
                        </div>
                        <div id='display' className='fade-in'>
                            {/* placeholder... replace later */}
                            {project === 0 ? <img src='./Photos/Screen Shot 2023-01-18 at 10.19.13 PM (2).jpg' alt='Selected App Screenshot' id='proj-photo' className='fade-in'/> : project === 1 ? <img src='./Photos/Screen Shot 2023-04-30 at 5.43.32 PM.png' alt='Selected App Screenshot' id='proj-photo'/> : null }
                            
                            <div className='separate gap fade-in'>
                                <div className='join'>
                                    <img src='./Photos/icons8-github-94.png' alt='place marker' className='place-mark i-grow'/>
                                    <a href={ project === 0 ? 'https://github.com/proptechnovator/fittrack-v2' : 'https://github.com/Gustavo0623/Go-Bird-Go' } className='half proj-link proj link tab'> Code </a>
                                </div>
                                <div className='half proj-link proj' id='live'>
                                    { project === 0 ? <a href='https://fittrack-frontend.herokuapp.com/' className='link tab'>Live Demo</a> : project === 1 ? <p className='select' id='invalid'>Demo Coming Soon!</p> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* quick links */}
                <div id='quick-links'>
                    <div id='home-contact'>
                        <h2 className='title fade-in'> Contact </h2>
                        <p className='msg fade-in'>I'm just a click away. Let's connect!</p>
                        {/* placeholder... replace later */}
                        <div className='separate fade-in' id='sep-contact'>
                            <div className='join half'>
                                <img src='./Photos/icons8-place-marker-94.png' alt='place marker' className='place-mark'/>
                                <p className='description'>Spring Valley</p>
                            </div>
                            <div className='join half'>
                                <img src='./Photos/icons8-mail-64.png' alt='place marker' className='place-mark i-pad'/>
                                <p className='description'>gustavo.0623@outlook.com</p>
                            </div>
                            <a href='/contact' className='link msg h-contact'>
                                <p className='tab'>More!</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;