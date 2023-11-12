import React from "react";

function GBGS () {


    return (
        <div id='fitTrack' className='fade-in'>
            <p className='msg' id='proj-role'><b className='msg role'>Backend Developer</b></p>
            <p className='msg'><b className='msg role'>Skills:</b> Backend Development, Game Logic, CRUD Operations, Database Management, Error Handling, and Testing.</p>
            <b className='msg role'>Key Responsibilities:</b>
            
            <ul className='detail-list'>
                <li className='list-item fade-in'>Design and implement server-side game logic and mechanics for the Flappy Bird-inspired game.</li>
                <li className='list-item fade-in'>Ensure synchronization between the frontend and backend for real-time gameplay.</li>
                <li className='list-item fade-in'>Develop CRUD routes for handling game maps, allowing players to create, retrieve, update, and delete maps.</li>
                <li className='list-item fade-in'>Enable players to create custom maps directly from the application UI.</li>
                <li className='list-item fade-in'>Implement functionality to validate and save custom maps to the database.</li>
                <li className='list-item fade-in'>Design an efficient PostgreSQL database schema to store game map data.</li>
                <li className='list-item fade-in'>Set up logging to capture and analyze server-side events for debugging and improvement.</li>
                <li className='list-item fade-in'>Debug and resolve issues promptly to maintain a smooth gaming experience.</li>
            </ul>
        </div>
    )
}

export default GBGS