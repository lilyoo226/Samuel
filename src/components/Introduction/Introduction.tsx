import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import "./introduction.scss"
import './Style.css'

const Introduction = () => {

    const [letterClass, setLetterClass] = useState("text-animate")
    const nameArray = "amuel,".split("")
    const jobArray = "Web Developer".split("")

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 400)

    })


    return (
        <div>
            <div className="intro__left">
                <span className="sectiontag">&lt;section&gt;</span>
                <h1 className="intro__headingPrimary">
                    <span className={letterClass}>H</span><span className={`${letterClass} _12`}>i,</span>&nbsp;<br />
                    <span className={`${letterClass} _13`}>I</span><span className={`${letterClass} _14`}>'m</span>&nbsp;<img src="https://res.cloudinary.com/dhbiouaym/image/upload/v1663667972/Portfolio/logo-s_fna9e6.png" className="intro__logos" alt="" />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={19} />
                </h1>
                <h2 className="intro__headingSecondary">Full Stack Developer / Software Engineer</h2>
                <Link to="/contact" className="intro__button">
                    Contact Me
                </Link>
                <span className="sectiontag">&lt;/section&gt;</span>
            </div>
        </div>
    )
}

export default Introduction