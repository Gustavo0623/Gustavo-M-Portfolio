import React, { useState } from "react";

function Work () {

    const [work, setWork] = useState(0)

    return (
        <div id='bg-display'>
            <div className='stack-group fade-in'>
                <div className='milestone'>
                    <strong className={work === 0 ? 'msg tab select' : 'msg tab'} onClick={() => {setWork(0)}}>Self Employed</strong>
                </div>
                <div className='milestone'>
                    <strong className={work === 1 ? 'msg tab select' : 'msg tab'} onClick={() => {setWork(1)}}>Independent Contractor</strong>
                </div>
            </div>
        </div>
    )
}

export default Work