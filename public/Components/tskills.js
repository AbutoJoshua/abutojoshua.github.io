import React from 'react';
import {Button, Chip, Dialog, DialogContent, DialogTitle, DialogActions} from 'react-mdl';

class Tskills extends React.Component {
    constructor(props) {
      super(props);
      this.state = {buttonClicked: '0'};
        this.handleOpenDialog = this.handleOpenDialog.bind(this);
      this.handleCloseDialog = this.handleCloseDialog.bind(this);
    }
  
    handleOpenDialog(props) {
      this.setState({
        openDialog: true,
      });
    }
  
    handleCloseDialog() {
      this.setState({
        openDialog: false
      });
    }

   
  
    render() {
      return (
          <div>
            <Button  colored onClick={this.handleOpenDialog}>Technical Skills</Button>
            <Dialog className="skillsbutton" open={this.state.openDialog} >
                <DialogTitle>General Technical Skills</DialogTitle>
                <DialogContent>
                <Chip>Object Oriented Programming</Chip>
                <Chip>Java, C++, C Programming</Chip>
                <Chip>Front End Development</Chip>
                <Chip>App Dev</Chip>
                <Chip>SDLC</Chip>
                <Chip>Software Testing</Chip>
                <Chip>Software Documentation</Chip>
                <Chip>Data processing and analysis</Chip>
                <Chip>Customer Service</Chip>
                <Chip>Microsoft Packages</Chip>
                <Chip>Desktop Support</Chip>
                </DialogContent>
                <DialogActions>
                  <Button style={{color: 'white'}} type='button' onClick={this.handleCloseDialog}>Done</Button>
                </DialogActions>
              </Dialog>
        </div>
      );
    }
  }

export default Tskills;