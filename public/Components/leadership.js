import React from 'react';
import {Button, Chip, Dialog, DialogContent, DialogTitle, DialogActions} from 'react-mdl';

class Leader extends React.Component {
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
          <Button colored style={{color: 'white'}} onClick={this.handleOpenDialog}>Leadership</Button>
            <Dialog className="skillsbutton" open={this.state.openDialog}>
            <DialogTitle>Leadership</DialogTitle>
            <DialogContent>
            <Chip style={{backgroundColor: 'green', color: 'white'}}>Adventist Christian Fellowship – President (2019-20)</Chip>
            <Chip style={{backgroundColor: 'green', color: 'white'}}>East African Society – Junior Advisor (2019-20)</Chip>
            <Chip style={{backgroundColor: 'green', color: 'white'}}>East African Society – Founder and President (Spring 2018-19)</Chip>
            <Chip style={{backgroundColor: 'orange'}}>NSBE – Academic Excellence Chair (Spring 2018-19)</Chip>
            <Chip style={{backgroundColor: 'orange'}}>Dean’s Challenge – Team leader (Spring 18)</Chip>
            <Chip style={{backgroundColor: 'orange'}}>Engineering Student Council – Freshman representative (2016-17)</Chip>
            
            </DialogContent>
            <DialogActions>
              <Button style={{color:'white'}} type='button' onClick={this.handleCloseDialog}>Done</Button>
            </DialogActions>
          </Dialog>
        </div>

      );
    }
  }

export default Leader;