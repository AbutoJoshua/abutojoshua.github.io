import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';


class Landingpage extends Component{
    render() {
        return(
            <div style={{width:'100%', margin: 'auto'}}> 
            <Grid className="landing-grid"> 
                <Cell col={12}>
                    <img 
                        src="./landingpagepic.jpg"
                        alt="avatar"
                        className='landing-avatar-img'
                    />
                    <div className="banner-text">
                        <h1> Full Stack Developer </h1>
                        <hr/>
                        
                        <p> Java | C | C++ | HTML/CSS | JavaScript | React | React-Native | SQL | Git </p>

                        <div className="social-links">
                            {/*LinkedIn */}
                            <a href="https://ke.linkedin.com/in/joshua-abuto-98729884" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" rel="noopener noreferrer" aria-hidden="true"/>
                            </a>

                            {/*GitHub */}
                            <a href="https://github.com/abutojoshua" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" rel="noopener noreferrer" aria-hidden="true"/>
                            </a>

                            {/*Freecodecamp */}
                            <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-free-code-camp" rel="noopener noreferrer" aria-hidden="true"/>
                            </a>

                            {/*Youtube */}
                            <a href="https://www.youtube.com/user/wuonotollo" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square" rel="noopener noreferrer" aria-hidden="true"/>
                            </a>

                        </div>

                    </div>
                </Cell>
            </Grid>
            </div>
        )
    }
}

export default Landingpage;