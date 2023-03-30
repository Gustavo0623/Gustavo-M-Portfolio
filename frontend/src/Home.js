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
                <h2> Project Highlights </h2>
                <div id='showcase'>
                    <div id='selector'>
                        <p key={0} id='1' className='proj'>Project 1</p>
                        <p key={1} className='proj'>Project 2</p>
                        <p key={2} className='proj'>Project 3</p>
                        <a key={3} href='/projects' className='proj link'>More Projects!</a>
                    </div>
                    <div id='display'>
                        {/* placeholder... replace later */}
                        <p>Image</p>
                        <p> GH Code </p>
                        <p> Live Demo </p>
                    </div>
                </div>
            </div>
            <div id='quick-links'>
                <h2> Contact </h2>
                <p className='msg'>I'm just a click away. Let's connect!</p>
                {/* placeholder... replace later */}
                <p> Location </p>
                <p> Mail </p>
                <a href='/contact' className='link'> More!</a>
            </div>
        </main>
    );
}

export default Home;