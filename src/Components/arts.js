import React from 'react';
import {Button, Chip, Dialog, DialogContent, DialogTitle, DialogActions} from 'react-mdl';

class Arts extends React.Component {
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
          <Button colored onClick={this.handleOpenDialog}>Arts</Button>
            <Dialog className="skillsbutton" open={this.state.openDialog}>
            <DialogTitle>Creative Arts</DialogTitle>
            <DialogContent>
            
            <Chip clickable> Photography </Chip>
            <Chip onClick= {"https://youtu.be/mb7fhBgKD1g"} clickable>Music: Trumpeter </Chip>
            <Chip href="https://youtu.be/LxUovGMd-c4" clickable>Music: Saxophone </Chip>
            </DialogContent>
            <DialogActions>
              <Button style={{color:'white'}} type='button' onClick={this.handleCloseDialog}>Done</Button>
            </DialogActions>
          </Dialog>
        </div>

      );
    }
  }

export default Arts;