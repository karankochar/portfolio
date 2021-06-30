import React from 'react'
import { useState } from 'react';
import './works.scss'

export default function Works() {

    const[currentSlider, setCurrentSlider] = useState(0);

    const data = [
        {
          id: "1",
          icon: "./assets/mobile.png",
          title: "Web Design",
          desc:
            "Web Designing using React, CSS and SCSS",
          img:
          "https://lh3.googleusercontent.com/proxy/IR9_TDKAmQ-QO1a8faBOJ7Qohcw3VnaX5nt2GSYwwiuL3WBT5RnIjPhScw3uiC8QMyrQcx1ObV4N9iPYR1jZEes8Pz0l9vxXsDZntmhB5Srt"
        },
        {
          id: "2",
          icon: "./assets/globe.png",
          title: "Mobile Application",
          desc:
            "Mobile Applications using React Native, SpringBoot, Java",
          img:
            "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
          id: "3",
          icon: "./assets/writing.png",
          title: "Backend Development",
          desc:
            "Backend Development using SpringBoot, Java and PostgreSQL",
          img:
            "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },
      ];

      const handleClick = (way) =>{
          way==="left" ? setCurrentSlider(currentSlider > 0 ? currentSlider -1 : 2)
          :setCurrentSlider(currentSlider < data.length - 1 ? currentSlider + 1 : 0)
      }

    return (
        <div className='works' id='works'>
            <div className="slider" style={{transform:`translateX(-${currentSlider * 100}vw)`}}>
                {data.map((d) => (
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon}></img>
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                    {d.desc} 
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        
                        <div className="right">
                            <img src={d.img} 
                            alt="" />
                        </div>
                    </div>
                </div>))}
            </div>
            <img src="assets/arrow.png" className="arrow left" onClick={()=>handleClick('left')}></img>
            <img src="assets/arrow.png" className="arrow right" onClick={()=>handleClick()}></img>   
        </div>
    )
}
