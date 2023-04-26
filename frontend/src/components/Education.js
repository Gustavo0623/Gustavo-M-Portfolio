import React, { useState } from "react";
import Certificate from "../components/Certificate";
import College from "../components/College";
import HighSchool from "../components/HighSchool";

function Education () {

    const [edu, setEdu] = useState(0)

    return (
        <div id='bg-display'>
            <div className='stack-group fade-in'>
                <div className='milestone'>
                    <strong className={edu === 0 ? 'msg tab select' : 'msg tab'} onClick={() => {setEdu(0)}}>{edu !== 0 ? 'H.S.' : 'HS Diploma'}</strong>
                </div>
                <div className='milestone'>
                    <strong className={edu === 1 ? 'msg tab select' : 'msg tab'} onClick={() => {setEdu(1)}}>{edu !== 1 ? 'A.S.' : "Associate's Degree"}</strong>
                </div>
                <div className='milestone'>
                    <strong className={edu === 2 ? 'msg tab select' : 'msg tab'} onClick={() => {setEdu(2)}}>{edu !== 2 ? 'P.C.' : 'Professional Certificate'}</strong>
                </div>
            </div>
            { edu === 0 ? <HighSchool/> : edu === 1 ? <College/> : edu === 2 ? <Certificate/> : null}
        </div>
    )
}

export default Education