import React from 'react';
import {Button, Chip, Dialog, DialogContent, DialogTitle, DialogActions} from 'react-mdl';

class Academic extends React.Component {
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
          <Button colored style={{color: 'white'}} onClick={this.handleOpenDialog}>Academic Achievements</Button>
            <Dialog className="skillsbutton" open={this.state.openDialog}>
            <DialogTitle>Academic Awards</DialogTitle>
            <DialogContent>
            <Chip>UW-MKE Dean's list (2017) </Chip>
            <Chip>NSBE Torchbearer Award (2017)</Chip>
            <Chip>NSBE Torchbearer Award (2018) </Chip>
            </DialogContent>
            <DialogActions>
              <Button style={{color:'white'}} type='button' onClick={this.handleCloseDialog}>Done</Button>
            </DialogActions>
          </Dialog>
        </div>

      );
    }
  }

export default Academic;