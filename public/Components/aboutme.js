import React, {Component} from 'react';
import {Grid, Cell, Card, CardTitle, CardActions, CardMenu, IconButton} from 'react-mdl';
import Skills from './skills';
import Tskills from './tskills';
import Academic from './academicawards';
import Extra from './extraawards';
import Leader from './leadership';
import Arts from './arts';
import Sports from './sports';
import Comandser from './comandser';



class Aboutme extends Component{
    render() {
        return(
            <div className="aboutmepage"> 
            <Grid> 
                <Cell className="grid-left-cell"col={7}>
                    <h2 style={{color:'white'}}>About Me</h2>

                    <hr style={{width:'80%', marginLeft:'4em', border: 'solid white'}}/>
                    
                    <div className="aboutme-description">
                        <p style={{color: 'white'}}>There are a lot of things I can say about myself, but I would like to give you a glimpse of who I am and what I have two offer based on the clusterred categories below. Feel free to <a style={{color: 'white' }} href="./contact" >contact me </a>for any questions or elaborations of what else I didn't include </p>
                    </div>
                    
                    <hr style={{width:'80%', marginLeft:'4em', marginBottom: '3em', border: 'solid white'}}/>
                    
                    <div >
                    <div className="aboutme-grid"> 
                    <Card shadow={3} style={{width:'200px', height:'150px', margin: 'auto'}}>
                    <CardTitle style={{color:'white', height: '100px', background: 'url(https://www.intheblack.com/-/media/intheblack/allimages/careers/2018/soft-skills.jpg?rev=8184a28d147a47e2a6c73f46ff50ba02) center / cover'}}> Skills </CardTitle>
                    {/*<CardText>
                    <Chip>Basic chip</Chip>
                    </CardText>*/}
                    <CardActions border>
                        <Skills />
                        <Tskills/>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                {/*Achievements */}
                <Card shadow={3} style={{backgroundColor:'black', width:'200px', height:'150px', margin: 'auto'}}>
                    <CardTitle style={{color:'black', height: '100px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTShqQjr5RKJDzUMUw7qpUT8DXKIJA2I_hU4mR9y4SO2__kCQDc&s) top / cover'}}>Achievements</CardTitle>
                    {/*<CardText>
                    <Chip>Basic chip</Chip>
                    </CardText>*/}
                    <CardActions border>
                        <Academic/>                        
                        <Extra/>
                        <Leader/>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="follow" style={{color: 'black'}}/>
                    </CardMenu>
                </Card>

                {/* Hobbies */}
                <Card shadow={5} style={{width:'200px', height:'150px', margin: 'auto'}}>
                    <CardTitle style={{color:'white', height: '176px', background: 'url(https://www.quizony.com/what-is-your-favorite-hobby/what-is-your-favorite-hobby-small.jpg) center / cover'}} />
                    {/*<CardText>
                    <Chip>Basic chip</Chip>
                    </CardText>*/}
                    <CardActions border>
                        <Arts/>                        
                        <Sports />
                        <Comandser/>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                </div>
                <hr style={{width:'80%', marginLeft:'4em', border: 'dotted white'}}/>

                <div className="social-links">
                            {/*LinkedIn */}
                            <a href="https://ke.linkedin.com/in/joshua-abuto-98729884" rel="noopener noreferrer" target="_blank">
                                <j className="fa fa-linkedin-square" rel="noopener noreferrer" aria-hidden="false"/>
                            </a>

                            {/*GitHub */}
                            <a href="https://github.com/abutojoshua" rel="noopener noreferrer" target="_blank">
                                <j className="fa fa-github-square" rel="noopener noreferrer" aria-hidden="true"/>
                            </a>

                            {/*Instagram */}
                            <a href="https://www.instagram.com/abuto_joshua/" rel="noopener noreferrer" target="_blank">
                                <j className="fa fa-instagram" rel="noopener noreferrer" aria-hidden="true"/>
                            </a>

                            {/*Youtube */}
                            <a href="https://www.youtube.com/user/wuonotollo" rel="noopener noreferrer" target="_blank">
                                <j className="fa fa-youtube-square" rel="noopener noreferrer" aria-hidden="true"/>
                            </a>
                </div>
                
                </div>                    
                </Cell>
                <Cell col={5}>
                    <div className="big-avatar-image">
                        <img
                        src = "./myfull.png"
                        alt="avatar"
                        className="big-avatar"
                        />
                    </div>
                    
                </Cell>
            </Grid>
            </div>
        )
    }
}

export default Aboutme;