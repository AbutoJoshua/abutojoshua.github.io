import React from 'react';
import {Button, Chip, Dialog, DialogContent, DialogTitle, DialogActions} from 'react-mdl';

class Comandser extends React.Component {
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
          <Button colored onClick={this.handleOpenDialog}>CAS</Button>
            <Dialog className="skillsbutton" open={this.state.openDialog}>
            <DialogTitle>Community and Service</DialogTitle>
            <DialogContent>
            <Chip style={{color: "black"}}>Mission Arlington</Chip>
            <Chip style={{color: "black"}}>Tutoring Services (College and High/Middle School)</Chip>
            <Chip style={{color: "black"}}>Mentoring and Advising</Chip>
            <Chip style={{color: "black"}}>Health and Wellness center database creation </Chip>
            </DialogContent>
            <DialogActions>
              <Button style={{color:'white'}} type='button' onClick={this.handleCloseDialog}>Done</Button>
            </DialogActions>
          </Dialog>
        </div>

      );
    }
  }

export default Comandser;