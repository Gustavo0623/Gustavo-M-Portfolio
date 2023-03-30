import React from 'react'

const Home = () => {
    return (
        <main>
            <div id='intro'>
                <div className='split'>
                    <div className='info'>
                        <h1 id='title'> Full Stack Software Developer </h1>
                        <p className='msg'> 
                            Full Stack Software Developer breaking into the tech industry. 
                            <br/>
                            Based in Spring Valley, California, USA
                            <br/>
                            <a href='/about' className='link'>More About Me!</a>
                        </p>
                        <div className='icons' id='li-gh'>
                            {
                            // <p> tags = temporary. replace with LinkedIn and Github icon links  
                            }
                            <p className='icon'>LI</p>
                            <p className='icon'>GH</p>
                        </div>
                    </div>
                    <img id='portrait' src='N/A' alt='Portrait of Gustavo Martinez'/>
                </div>

                <div id='t-stack'>
                    <p className='t-title'> Tech Stack </p>
                    <div className='stack-group'>
                        <p className='icon list'>Js</p>
                    </div>
                </div>
            </div>

            {/* project display */} 
            <div id='proj-home'> 
                <div id='showcase'>
                    <div className='left-show'>
                        <h2> Project Highlights </h2>
                        <div id='selector'>
                            <p key={0} id='1' className='proj'>Project 1</p>
                            <p key={1} className='proj'>Project 2</p>
                            <p key={2} className='proj'>Project 3</p>
                            <a key={3} href='/projects' id='proj-link' className='proj link'>More Projects!</a>
                        </div>
                    </div>
                    <div id='display'>
                        {/* placeholder... replace later */}
                        <p id='proj-photo'>Image</p>
                        <div className='separate'>
                            <p className='half proj'> GH Code </p>
                            <p className='half proj'> Live Demo </p>
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
                        <p className='msg h-contact'> Location </p>
                        <p className='msg h-contact'> Mail </p>
                        <a href='/contact' className='link msg h-contact'> More!</a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;