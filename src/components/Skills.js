import React from 'react';
import './Skills.css';
import pythoni from '../image/lang/python.png';
import js from "../image/lang/js1.png";
import c from "../image/lang/c.png";
import html from "../image/lang/html.png";
import css from "../image/lang/css.png";
import bootstrap from "../image/lang/bootstrap.png";
import jquery from "../image/lang/jquery.png";
import node from "../image/lang/node.png";
import express from "../image/lang/express.png";
import mongodb from "../image/lang/mongodb1.png";
import d3 from "../image/lang/d3.png";
import react from "../image/lang/react.png";
import redux from "../image/lang/redux.png";
import mysql from "../image/lang/mysql.png";
import mssql from "../image/lang/mssql1.png";
import django from "../image/lang/django.png";
import git from "../image/lang/git.png";
import github from "../image/lang/github.png";
import figma from "../image/lang/figma.png";
import heroku from "../image/lang/heroku.png";
import php from "../image/lang/php.png";
import sass from "../image/lang/sass.png";


const Skills = () => {
    return (
      <div className="skills">
        <h1>Skills</h1>
        <div className="skills-container">
            <div className="lang pro-lang">

            <h2>Programming Languages</h2>
                
                <div className="python">
                <div className="lang-img-con"><img alt="logo" src={pythoni} className="python-img"></img></div>
                <h5>Python</h5></div>

                <div className="js">
                <div className="lang-img-con"><img alt="logo" src={js} className="js-img"></img></div>
                <h5>JavaScript</h5></div>

                <div className="c#">
                <div className="lang-img-con"><img alt="logo" src={c} className="c#-img"></img></div>
                <h5>C#</h5></div>
            </div>
            <div className="front-end lang">
                <h2>Front-End</h2>

                <div className='html'>
                <div className="lang-img-con"><img alt="logo" src={html} className="html-img"></img></div>
                <h5>HTML</h5></div>

                <div className="css">
                <div className="lang-img-con"><img alt="logo" src={css} className="css-img"></img></div>
                <h5>CSS 3</h5></div>
                
                <div className="react">
                <div className="lang-img-con"><img alt="logo" src={react} className="react-img"></img></div>
                <h5>React</h5></div>
                
                <div className="redux">
                <div className="lang-img-con"><img alt="logo" src={redux} className="redux-img"></img></div>
                <h5>Redux</h5></div>
                
                <div className="jquery">
                <div className="lang-img-con"><img alt="logo" src={jquery} className="jquery-img"></img></div>
                <h5>jquery</h5></div>
                
                <div className="bootstrap">
                <div className="lang-img-con"><img alt="logo" src={bootstrap} className="bootstrap-img"></img></div>
                <h5>Bootstrap</h5></div>

                <div className="sass">
                <div className="lang-img-con"><img alt="logo" src={sass} className="sass-img"></img></div>
                <h5>Sass</h5></div>

                <div className="d3">
                <div className="lang-img-con"><img alt="logo" src={d3} className="d3-img"></img></div>
                <h5>D3</h5></div>
            </div>
            <div className="back-end lang">
                <h2>Back-End</h2>

                <div className="node">
                <div className="lang-img-con"><img alt="logo" src={node} className="node-img"></img></div>
                <h5>Node js</h5></div>

                <div className="express">
                <div className="lang-img-con"><img alt="logo" src={express} className="express-img"></img></div>
                <h5>Express</h5></div>

                {/* <div className="php">
                <img alt="logo" src={php} className="php-img"></img>
                <h5>PHP</h5></div> */}

                <div className="django">
                <div className="lang-img-con"><img alt="logo" src={django} className="django-img"></img></div>
                <h5>Django</h5></div>

            </div>
            <div className="database lang">
                <h2>DataBase</h2>

                <div className="mongo">
                <div className="lang-img-con"><img alt="logo" src={mongodb} className="mongo-img"></img></div>
                <h5>MongoDB</h5></div>

                <div className="mysql">
                <div className="lang-img-con"><img alt="logo" src={mysql} className="mysql-img"></img></div>
                <h5>Mysql</h5></div>

                <div className="mssql">
                <div className="lang-img-con"><img alt="logo" src={mssql} className="mssql-img"></img></div>
                <h5>Mssql</h5></div>

            </div>
            <div className="other lang">
                <h2>Other</h2>

                <div className="git">
                <div className="lang-img-con"><img alt="logo" src={git} className="git-img"></img></div>
                <h5>GIT</h5></div>

                <div className="github">
                <div className="lang-img-con"><img alt="logo" src= {github} className="github-img"></img></div>
                <h5>GitHub</h5></div>

                <div className="heroku">
                <div className="lang-img-con"><img alt="logo" src={heroku} className="heroku-img"></img></div>
                <h5>Heroku</h5></div>

                <div className="figma">
                <div className="lang-img-con"><img alt="logo" src={figma} className="figma-img"></img></div>
                <h5>Figma</h5></div>

            </div>
        </div>
      </div>
    )
}

export default Skills
