import React, { useState } from "react";
import IndepC from "./IndepC";
import SelfE from "./SelfE";
import Vertex from "./Vertex";

function Work () {

    const [work, setWork] = useState(0)

    return (
        <div id='bg-display'>
            <div className='stack-group fade-in'>
                <div className='p-c'>
                    <strong id='vertex' className={work === 0 ? 'msg select' : 'msg'} onClick={() => {setWork(0)}}>Freelance Software Developer</strong>
                </div>
                <div className='p-c'>
                    <strong id='s-e' className={work === 1 ? 'msg select' : 'msg'} onClick={() => {setWork(1)}}>Self Employed</strong>
                </div>
                <div className='p-c'>
                    <strong id='i-c' className={work === 2 ? 'msg select' : 'msg'} onClick={() => {setWork(2)}}>Independent Contractor</strong>
                </div>
            </div>
            { work === 0 ? <Vertex/> : work === 1 ? <SelfE/> : work === 2 ? <IndepC/> : null}
        </div>
    )
}

export default Work