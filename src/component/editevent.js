import React from 'react';
import Dialog, {DialogActions,DialogContent, DialogContentText, DialogTitle} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Event from "./events.js";

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    menu: {
      width: 200,
    },
  });
class EditEvent extends React.Component {
    constructor(props)
    {
        super(props);
        this.state ={
            open :false,
            events:{}
        }
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };
    
    handleClose = () => {
        this.setState({ open: false });
      };
    // handleSubmit (events){
    //     this.setState( () => ({events}));
    // }
    
    render() 
    { 
        const events = this.props.events;
        return (
            <div>
                <Button onClick={this.handleClickOpen}>Edit Event</Button>
                    <Dialog open={this.state.open} onClose={this.handleClose} >
                        <DialogTitle>Edit Event</DialogTitle>
                        <DialogContent>
                            <TextField
                                    label='event name'
                                    defaultValue={this.props.events.name}/>
                                <TextField
                                    label="Start Date"
                                    type="date"
                                    defaultValue ={this.props.events.startDate} />
                                <TextField
                                    label="End Date"
                                    type="date"
                                    defaultValue= {this.props.events.endDate}/>
                                <TextField
                                    label="Start Time"
                                    type="time"
                                    defaultValue= {this.props.events.startTime}/>
                                <TextField
                                    label="EndTime"
                                    type="time"
                                    defaultValue={this.props.events.endTime}/>
                            <TextField
                                label='Event Location'
                                defaultValue={this.props.events.location} />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleSubmit} color="primary">
                                Submit
                            </Button>
                        </DialogActions>
                    </Dialog>
            </div>
        )
    }
}
export default withStyles(styles)(EditEvent);    
