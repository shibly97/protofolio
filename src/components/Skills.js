import React from 'react';
import './Skills.css';


const Skills = () => {
    return (
      <div className="skills">
        <h1>Skills</h1>
        <div className="skills-container">
            <div className="lang pro-lang">

            <h2>Programming Languages</h2>
                
                <div className="python">
                <img alt="logo" src="/image/lang/python.png" className="python-img"></img>
                <h5>Python</h5></div>

                <div className="js">
                <img alt="logo" src="/image/lang/js1.png" className="js-img"></img>
                <h5>JavaScript</h5></div>

                <div className="c#">
                <img alt="logo" src="/image/lang/c.png" className="c#-img"></img>
                <h5>C#</h5></div>
            </div>
            <div className="front-end lang">
                <h2>Front-End</h2>

                <div className="html">
                <img alt="logo" src="/image/lang/html.png" className="html-img"></img>
                <h5>HTML</h5></div>

                <div className="css">
                <img alt="logo" src="/image/lang/css.png" className="css-img"></img>
                <h5>CSS 3</h5></div>
                
                <div className="react">
                <img alt="logo" src="/image/lang/react.png" className="react-img"></img>
                <h5>React</h5></div>
                
                <div className="redux">
                <img alt="logo" src="/image/lang/redux.png" className="redux-img"></img>
                <h5>Redux</h5></div>
                
                <div className="jquery">
                <img alt="logo" src="/image/lang/jquery.png" className="jquery-img"></img>
                <h5>jquery</h5></div>
                
                <div className="bootstrap">
                <img alt="logo" src="/image/lang/bootstrap.png" className="bootstrap-img"></img>
                <h5>Bootstrap</h5></div>

                <div className="sass">
                <img alt="logo" src="/image/lang/sass.png" className="sass-img"></img>
                <h5>Sass</h5></div>

                <div className="d3">
                <img alt="logo" src="/image/lang/d3.png" className="d3-img"></img>
                <h5>D3</h5></div>
            </div>
            <div className="back-end lang">
                <h2>Back-End</h2>

                <div className="node">
                <img alt="logo" src="/image/lang/node.png" className="node-img"></img>
                <h5>Node js</h5></div>

                <div className="express">
                <img alt="logo" src="/image/lang/express.png" className="express-img"></img>
                <h5>Express</h5></div>

                <div className="php">
                <img alt="logo" src="/image/lang/php.png" className="php-img"></img>
                <h5>PHP</h5></div>

                <div className="django">
                <img alt="logo" src="/image/lang/django.png" className="django-img"></img>
                <h5>Django</h5></div>

            </div>
            <div className="database lang">
                <h2>DataBase</h2>

                <div className="mongo">
                <img alt="logo" src="/image/lang/mongodb1.png" className="mongo-img"></img>
                <h5>MongoDB</h5></div>

                <div className="mysql">
                <img alt="logo" src="/image/lang/mysql.png" className="mysql-img"></img>
                <h5>Mysql</h5></div>

                <div className="mssql">
                <img alt="logo" src="/image/lang/mssql1.png" className="mssql-img"></img>
                <h5>Mssql</h5></div>

            </div>
            <div className="other lang">
                <h2>Other</h2>

                <div className="git">
                <img alt="logo" src="/image/lang/git.png" className="git-img"></img>
                <h5>GIT</h5></div>

                <div className="github">
                <img alt="logo" src="/image/lang/github.png" className="github-img"></img>
                <h5>GitHub</h5></div>

                <div className="heroku">
                <img alt="logo" src="/image/lang/heroku.png" className="heroku-img"></img>
                <h5>Heroku</h5></div>

                <div className="figma">
                <img alt="logo" src="/image/lang/figma.png" className="figma-img"></img>
                <h5>Figma</h5></div>

            </div>
        </div>
      </div>
    )
}

export default Skills
