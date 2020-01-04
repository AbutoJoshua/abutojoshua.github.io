import React from 'react';
import {Button, Chip, Dialog, DialogContent, DialogTitle, DialogActions} from 'react-mdl';

class Skills extends React.Component {
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
          <Button colored  onClick={this.handleOpenDialog}>Soft Skills</Button>
            <Dialog className="skillsbutton" open={this.state.openDialog}>
            <DialogTitle>General Soft Skills</DialogTitle>
            <DialogContent>
            <Chip>Leadership</Chip>
            <Chip>Time Management</Chip>
            <Chip>Problem Soving</Chip>
            <Chip>Effective Communication Skills</Chip>
            <Chip>Presentation Skills</Chip>
            <Chip>Trilingual</Chip>
            <Chip>Teamwork</Chip>
            <Chip>Customer Service</Chip>
            <Chip>Troubleshooting</Chip>
            </DialogContent>
            <DialogActions>
              <Button style={{color:'white'}} type='button' onClick={this.handleCloseDialog}>Done</Button>
            </DialogActions>
          </Dialog>
        </div>

      );
    }
  }

export default Skills;