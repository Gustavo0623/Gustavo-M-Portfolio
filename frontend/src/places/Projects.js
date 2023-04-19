const Projects = () => {
    return (
        <main>
            <div className='about'>
                <div className='blur pad bottom'>
                    <h1>A Glimpse Of What Is Possible</h1>
                    <div id='pro-tabs'>
                        <h2 className='tab'>Front-End</h2>
                        <h2 className='tab'>Back-End</h2>
                    </div>
                    <div id='pro-split'>
                        <div id='bg-content'>
                            {/* showcase similar to home and about */}
                            <h3 className='tab'>Fit-Track</h3>
                            <h3 className='tab'>Go-Bird-Go</h3>
                        </div>
                        <div id='bg-display'>
                            <div id='pro-display'>
                                <img src='./Photos/Screen Shot 2023-01-18 at 10.19.13 PM (2).jpg' alt='Selected App Screenshot' id='proj-photo'/>
                                <button id='toggle-view'> Details </button>
                            </div>
                            <p id='pro-link'> 
                                Like what you see?
                                <br/> 
                                <a href='/contact' className='link'> Contact Me!</a>
                            </p>
                        </div>
                    </div>
                </div> 
            </div>
        </main>
    );
}

export default Projects;