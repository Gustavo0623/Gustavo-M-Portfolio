import React from 'react'

const Home = () => {
    return (
        <main>
            <div id='intro'>
                <h1 id='title'> Full Stack Software Developer </h1>
                <div className='split'>
                    <div className='info'>
                        <p className='description'> Full Stack Software Developer breaking into the tech industry. </p>
                        <div className='join'>
                            <img src='./Photos/icons8-place-marker-94.png' alt='place marker' className='place-mark'/>
                            <p className='description'>Spring Valley, California, USA</p>
                        </div>
                        <a href='/about' className='link description'>More About Me!</a>
                        
                        <div className='icons' id='li-gh'>
                            {
                            // <p> tags = temporary. replace with LinkedIn and Github icon links  
                            }
                            <a href='https://www.linkedin.com/in/gustavo-martinez-765940204/'>
                                <img src='./Photos/icons8-linkedin-94.png' alt='linkedin' className='icon'/>
                            </a>
                            <a href='https://github.com/Gustavo0623'>
                                <img src='./Photos/icons8-github-94.png' alt='github' className='icon'/>
                            </a>
                        </div>
                    </div>
                    <img id='portrait' src='./Photos/photo-output (4).PNG' alt='Portrait of Gustavo Martinez'/>
                </div>

                <div id='t-stack'>
                    <p className='t-title'> Tech Stack </p>
                    <div className='stack-group'>
                        <img src='./Photos/icons8-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-48.png' alt='HTML5 logo' className='icon list'/>
                        <img src='./Photos/icons8-cascading-style-sheets-language-used-for-describing-the-presentation-of-a-document-48.png' alt='CSS3 logo' className='icon list'/>
                        <img src='./Photos/icons8-javascript-48.png' alt='javascript logo' className='icon list'/>
                    </div>
                </div>
            </div>

            {/* Work Status */}
            <div id='w-status'>
                <div id='otw'>
                    <h2> Open To Work! </h2>
                    <p className='msg'> 
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
            <div id='proj-home'> 
                <h2> Project Highlights </h2>
                <div id='showcase'>
                    <div className='left-show'>    
                        <div id='selector'>
                            <p key={0} className='proj'>Fit-Track</p>
                            <p key={1} className='proj'>Project 2</p>
                            <p key={2} className='proj'>Project 3</p>
                            <a key={3} href='/projects' className='proj-link proj link'>More Projects!</a>
                        </div>
                    </div>
                    <div id='display'>
                        {/* placeholder... replace later */}
                        <img src='./Photos/Screen Shot 2023-01-18 at 10.19.13 PM (1).jpg' alt='Selected App Screenshot' id='proj-photo'/>
                        <div className='separate'>
                            <a href='https://github.com/proptechnovator/fittrack-v2' className='half proj-link proj link'> GH Code </a>
                            <a href='https://fittrack-frontend.herokuapp.com/' className='half proj-link proj link'> Live Demo </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* quick links */}
            <div id='quick-links'>
                <div id='home-contact'>
                    <h2> Contact </h2>
                    <p className='msg'>I'm just a click away. Let's connect!</p>
                    {/* placeholder... replace later */}
                    <div className='separate' id='sep-contact'>
                        <div className='join half'>
                            <img src='./Photos/icons8-place-marker-94.png' alt='place marker' className='place-mark'/>
                            <p className='description'>Spring Valley</p>
                        </div>
                        <div className='join half'>
                            <img src='./Photos/icons8-mail-64.png' alt='place marker' className='place-mark'/>
                            <p className='description'>gustavo.0623@outlook.com</p>
                        </div>
                        <a href='/contact' className='link msg h-contact'> More!</a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;