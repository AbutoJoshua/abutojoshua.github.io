import React from 'react';
import {Button, Chip, Dialog, DialogContent, DialogTitle, DialogActions} from 'react-mdl';

class Extra extends React.Component {
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
          <Button colored style={{color: 'white'}} onClick={this.handleOpenDialog}>Extra Curricular Awards</Button>
            <Dialog className="skillsbutton" open={this.state.openDialog}>
            <DialogTitle>Extra-curricular Awards</DialogTitle>
            <DialogContent>
            <Chip icon="fa fa-trophy">UW-Milwaukee Ignite Leadership Award (May 2017) </Chip>
            <Chip>TexMUN Outstanding Delegation Award (Spring 2018)</Chip>
            <Chip>Inaugural Dean’s Challenge – Best Idea, First Place (Spring 2018)</Chip>
            <Chip>Student Employee of the Year Award (Spring 2019)</Chip>
            </DialogContent>
            <DialogActions>
              <Button style={{color:'white'}} type='button' onClick={this.handleCloseDialog}>Done</Button>
            </DialogActions>
          </Dialog>
        </div>

      );
    }
  }

export default Extra;