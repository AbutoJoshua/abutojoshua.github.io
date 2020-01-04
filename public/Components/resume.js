import React, {Component} from 'react';

import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skillsresume';
import './resumepic.JPG';


class Resume extends Component{
    render() {
        return(
            <div className="resume-left"> 
            <Grid>
                <Cell  col={4} style={{color:'white'}}>
                    <div style={{textAlign: 'center'}}>
                        <img
                            src ="./resumepic.JPG"
                            alt= "avatar"
                            style={{height: '250px'}}
                            />
                    </div>
                    <h2 >Joshua Abuto</h2>
                        <h4>Software Engineer</h4>
                    
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p> 
                            As a senior pursuing a bachelor's degree in Software Engineering, I am seeking a full-time position in a company that would allow me to grow and become a better software engineer. I am not restricted to any specific role at this time but I am interested in a role that would allow me to exploit both my engineering skills and leadership skills. Despite being an F-1 student, I hope I am able to secure a full-time position in your company after I graduate spring 2020. 
                        </p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    
                    <h5>Address</h5>
                    <p >300 West 1st St. Arlington, Tx 76019</p>
                    
                    <h5 >Phone</h5>
                    <p>(224)-619-6295</p>
                    
                    <h5>E-mail</h5>
                        <p>joshua.i.abuto@gmail.com</p>
                    
                    <h5>Web</h5>
                    <p>abutojoshua.tosujayz.com</p>
                    
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                </Cell>
                <Cell className="resume-right-col" col={8}>
                    <h2>Education</h2>


                    <Education 
                        startYear={2017}
                        endYear={2020}
                        schoolName={'University of Texas - Arlington'}
                        schoolDescription = {'BSC Computer Science - Software Engineering            GPA:3.22/4.00'}
                        />

                    <Education 
                        startYear={2016}
                        endYear={2017}
                        schoolName={'University of Wisconsin-Milwaukee'}
                        schoolDescription = {'BSC Civil Engineering - Minor in Computer Science      GPA: 3.45/4.00'}
                        />

                    <Education 
                        startYear={2014}
                        endYear={2016}
                        schoolName={'The Aga Khan Academy, Mombasa'}
                        schoolDescription = {'IB Diploma Programme - Bilingual Diploma      Grade: 35/45'}
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>

                        <Experience

                            startYear={'June 2017'}
                            endYear={'August 2017'}
                            jobName={"IS-Professional In-training"}
                            employer={"State of Wisconsin DHS - Bureau of IT Services"}
                            jobDescription={"Under the close supervision of the Desktop Management and Support Section Chief, perform activities in support of DHS operations. Duties include hands-on support of incidents, change and request management related to DHS desktops, laptops, printers, wireless devices, and applications. The primary focus of this position is to resolve technical issues and to assist customers with desktop applications, documents, and sharing information. This position participates in the ongoing service delivery efforts of the Section by communicating, coordinating, and cooperating with other sections and teams within the Department. The incumbent in the position must be focused on customer service, and have behaviors which display that attitude."}

                        />

                        <Experience

                        startYear={'Sept 2017'}
                        endYear={'December 2019'}
                        jobName={"Housing Ambassador"}
                        employer={"UTA Auxilliary Business Services - Housing Office"}
                        jobDescription={"Being the first contact to the housing services, the housing ambassadors are meant to serve, direct and assist in-person and on call customers with the best information and customer service on behalf of the housing services. They are not only tasked with front desk duties but are also required to do housing tours and tabling events."}

                        />

                        <Experience

                        startYear={'Sept 2019'}
                        endYear={'December 2019'}
                        jobName={"Intramural Official"}
                        employer={"UTA Campus Recreation"}
                        jobDescription={"In charge of officiating recreational sports offered by UTA Campus Recreation. The IM officials are in charge of conveying, enforcing rules and are also in charge conflict resolution amongst players"}

                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Skills</h2>
                        <Skills 
                            skill={'Java'}
                            progress={85}
                        />
                        <Skills 
                            skill={'HTML/CSS'}
                            progress={80}
                        />
                        <Skills 
                            skill={'C '}
                            progress={75}
                        />
                        
                        <Skills 
                            skill={'React'}
                            progress={50}
                        />
                        <Skills 
                            skill={'JavaScript'}
                            progress={45}
                        />
                        
                        
                        
                        

                </Cell>
            </Grid>
            </div>
        )
    }
}

export default Resume;