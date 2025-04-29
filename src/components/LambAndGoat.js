import React, { useState } from "react";

import Lamb from '../images/lamb.svg'
import LambSmiling from '../images/lambSmiling.svg'
import Goat from '../images/goat.svg'
import GoatSmiling from '../images/goatSmiling.svg'
import GoatSound from '../audio/goat.mp3'
import LambSound from '../audio/lamb.mp3'



export default function LambAndGoat() {
    const [goatSmiling, setGoatSmiling] = useState(false);
    const [lambSmiling, setLambSmiling] = useState(false);
    const GoatS = new Audio(GoatSound);
    const LambS = new Audio(LambSound);

    function playGoatSound() {
        GoatS.play()
    }
    function playLambSound() {
        LambS.play()
    }

    return (
        <div className='goatlamb-pic'>
            <img 
                id="Lamb" 
                src={lambSmiling === false ? Lamb : LambSmiling} 
                alt='lamb'
                onClick={playLambSound} 
                onMouseEnter={() => {
                    setLambSmiling(true);
                }}
                onMouseLeave={() => {
                    setLambSmiling(false);
                }} 
            />
            <img 
                id="Goat" 
                src={goatSmiling === false ? Goat : GoatSmiling} 
                alt='goat'
                onClick={playGoatSound}
                onMouseEnter={() => {
                    setGoatSmiling(true);
                }}
                onMouseLeave={() => {
                    setGoatSmiling(false);
                }}  
            />
        </div>

    )
}