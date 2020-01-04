import React, {Component} from 'react';
import {Grid, Cell, List, ListItemContent, ListItem} from 'react-mdl';


class Contact extends Component{
    render() {
        return(
            <div className="contact-body"> 
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2> Joshua Abuto</h2>
                        <img
                        src="./contactmepic.jpg"
                        alt= "avatar"
                        style={{height:'250px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop:'1em'}}>
                            Joshua is a solve it person. Anything you need can be solved by him if not, you will be referred to someone who can.
                        </p>
                        <p>I am also Tony Rogers' manager. </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        +1-(224)-619-6295
                                        
                                        </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                        <a href="https://ke.linkedin.com/in/joshua-abuto-98729884" style={{color: 'black'}}>
                                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                                            Joshua Abuto
                                        </a>
                                        
                                        
                                        </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        joshua.i.abuto@gmail.com
                                        
                                        </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                        <a href="https://www.instagram.com/abuto_joshua/" style={{color: 'black'}}>
                                            <i className="fa fa-instagram" aria-hidden="true" />
                                        @abuto_joshua
                                        </a>

                                        </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;