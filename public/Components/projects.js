import React, {Component} from 'react';
import {Tab, Tabs, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';


class Projects extends Component{

    constructor(props){
        super(props);
        this.state = {activeTab:0};
    }

    toggleCategories(){
            if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                    <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://lh3.googleusercontent.com/p5Y0HwpwQ5P5hX5BwhWCFyNUV_uqKehC9mTJ6YxuLws_c4WQ_uQm42uzzc1WosYwBrpr) center / cover'}}> Java Project #1</CardTitle>
                    <CardText>
                        This was a project I made in my freshman year to conclude Java Object Oriented Programming. It emulates the reversi game. Though not entirely complete it works but does not conquer as the game continues
                    </CardText>
                    <CardActions border>
                        <Button colored> GitHub </Button>                        
                        <Button colored> CodePen </Button>
                        <Button colored> Live Demo </Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                {/* Project 2 */}
                <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                    <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://www.coderscat.com/wp-content/uploads/2019/09/algo-taco.png-930x620.png) center / cover'}}> Java Project #2</CardTitle>
                    <CardText>
                        This was a compilation of all the sort algorithms I compiled after my freshman year
                    </CardText>
                    <CardActions border>
                        <Button colored> GitHub </Button>                        
                        <Button colored> CodePen </Button>
                        <Button colored> Live Demo </Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                {/* Project 3 */}
                <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                    <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://image.flaticon.com/icons/png/512/121/121152.png) center / cover'}}> Java Project #3</CardTitle>
                    <CardText>
                        The contents of this project will be determined at a later time
                    </CardText>
                    <CardActions border>
                        <Button colored> GitHub </Button>                        
                        <Button colored> CodePen </Button>
                        <Button colored> Live Demo </Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                <div className="projectspage" style={{height: '160px'}}>

                </div>
                </div>
            )
        } else if(this.state.activeTab===1){
            return(
                <div className="projects-grid"> 
                    <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                    <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://raddevon.com/wp-content/uploads/2018/10/react.jpg) center / cover'}}> React Project #1</CardTitle>
                    <CardText>
                        This website you are seeing was my first React Project
                    </CardText>
                    <CardActions border>
                        <Button colored> GitHub </Button>                        
                        <Button colored> CodePen </Button>
                        <Button colored> Live Demo </Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                <div className="projectspage" style={{height: '150px'}}>

                </div>
                </div>
                
            )
        } else if(this.state.activeTab===2){
            return(
                <div>
                    <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                    <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://cdnp1.stackassets.com/dbd8b662370e2dd5283d3f352802c43c79b15f8d/store/opt/596/298/abf733ad50de70c3ad93f8b34f894876f93318a2aff76ccc7504ecce0fc1/product_16032_product_shot_wide_image.jpg) center / cover'}}> C Project #1</CardTitle>
                    <CardText>
                        The contents of this project will be determined at a later time
                    </CardText>
                    <CardActions border>
                        <Button colored> GitHub </Button>                        
                        <Button colored> CodePen </Button>
                        <Button colored> Live Demo </Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                 <div className="projectspage" style={{height: '160px'}}>

                </div>
                </div>
               
            )
        } else if(this.state.activeTab===3){
            return(
                <div>
                    <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                    <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://image.flaticon.com/icons/png/512/74/74897.png) center / cover'}}> C++ Project #1</CardTitle>
                    <CardText>
                    The contents of this project will be determined at a later time
                    </CardText>
                    <CardActions border>
                        <Button colored> GitHub </Button>                        
                        <Button colored> CodePen </Button>
                        <Button colored> Live Demo </Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                
                </div>
                
            )
        }

    }
    
    render() {
        return(
            <div className="projectspage">
            <div className="category-tabs"> 
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) =>this.setState({activeTab: tabId})} ripple>
                <Tab >Java</Tab>
                <Tab >React</Tab>
                <Tab >C Programming</Tab>
                <Tab >C++ Programming</Tab>
                </Tabs> 

            
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>

                </Grid>
                <div className="projectspage" style={{height: '170px'}}>

                </div>
            </div>
            </div>
        )
    }
}

export default Projects;