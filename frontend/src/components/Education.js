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
                    <strong id='pc' className={edu === 0 ? 'msg select' : 'msg tabs'} onClick={() => {setEdu(0)}}>Professional Certificate</strong>
                </div>
                <div className='milestone'>
                    <strong id='hs' className={edu === 1 ? 'msg select' : 'msg tabs'} onClick={() => {setEdu(1)}}>HS Diploma</strong>
                </div>
                <div className='milestone'>
                    <strong id='asd' className={edu === 2 ? 'msg select' : 'msg tabs'} onClick={() => {setEdu(2)}}>Associate's Degree</strong>
                </div>
            </div>
            { edu === 0 ? <Certificate/> : edu === 1 ? <HighSchool/> : edu === 2 ? <College/> : null}
        </div>
    )
}

export default Education