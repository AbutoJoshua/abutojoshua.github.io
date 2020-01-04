import React from 'react';
import {Button, Chip, Dialog, DialogContent, DialogTitle, DialogActions} from 'react-mdl';

class Sports extends React.Component {
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
          <Button colored onClick={this.handleOpenDialog}>Sports</Button>
            <Dialog className="skillsbutton" open={this.state.openDialog}>
            <DialogTitle>Sports</DialogTitle>
            <DialogContent>
            <Chip style={{color:'black'}} >Recreational Basketball</Chip>
            <Chip style={{color:'black'}} href="./https://www.nba.com/bucks/" clickable >Milwaukee Bucks fan</Chip>
            <Chip style={{color:'black'}} >Recreational Soccer Player</Chip>
            <Chip style={{color:'black'}} href="https://www.chelseafc.com/en">Chelsea FC fan</Chip>
            <Chip style={{color:'black'}} >Recreational Rugby</Chip>
            <Chip style={{color:'black'}} >Kenya Sevens | All Blacks | Springboks Fan</Chip>
            <Chip style={{color:'black'}} href="https://www.packers.com/">GB Packers Fan</Chip>
            <Chip style={{color:'black'}} >Recreational Swimming</Chip>
            </DialogContent>
            <DialogActions>
              <Button style={{color:'white'}} type='button' onClick={this.handleCloseDialog}>Done</Button>
            </DialogActions>
          </Dialog>
        </div>

      );
    }
  }

export default Sports;