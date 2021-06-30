import React from 'react'
import {init} from 'ityped'
import { useEffect, useRef } from 'react'
import './intro.scss'

export default function Intro() {

    const textRef = useRef();

    useEffect(()=>{
        
        init(textRef.current, { showCursor: true, strings: ['Software Engineer', 'Software Developer', 'Backend Developer' ], backDelay:1500, disableBackTyping:60 })
    }, [])

    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src='assets/karan.png'></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Karandeep</h1>
                    <h3><span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                <img src='assets/down.png'></img>
                </a>
            </div>

        </div>
    )
}
