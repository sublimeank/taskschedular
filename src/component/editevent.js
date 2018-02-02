import React from 'react';
import Dialog, { DialogActions, DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Icon from 'material-ui/Icon';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Event from "./events.js";
import Edit from 'material-ui-icons/Edit';
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
    button: {
        margin: theme.spacing.unit,
      },
      input: {
        display: 'none',
      },
});
class EditEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            isEditClicked: false,
            events: {}
        }
        
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    handleEdit = () => {
        this.setState({ isEditClicked: !this.state.isEditClicked });
    }


    render() {
        const { classes } = this.props;
        const events = this.props.events;
        return (
            <div>
                <Button onClick={this.handleClickOpen}>Edit Event</Button>
                <Dialog open={this.state.open} onClose={this.handleClose} >
                    <DialogTitle>Edit Event</DialogTitle>
                    <DialogContent>
                        <TextField

                            disabled ={!this.state.isEditClicked}
                            label='event name'
                            defaultValue={this.props.events.name} />
                        <TextField
                            label="Start Date"
                            type="date"
                            disabled ={!this.state.isEditClicked}
                            defaultValue={this.props.events.startDate} />
                        <TextField
                            label="End Date"
                            type="date"
                            disabled ={!this.state.isEditClicked}
                            defaultValue={this.props.events.endDate} />
                        <TextField
                            label="Start Time"
                            type="time"
                            disabled ={!this.state.isEditClicked}
                            defaultValue={this.props.events.startTime} />
                        <TextField
                            label="EndTime"
                            type="time"
                            disabled ={!this.state.isEditClicked}
                            defaultValue={this.props.events.endTime} />
                        <TextField
                            label='Event Location'
                            disabled ={!this.state.isEditClicked}
                            defaultValue={this.props.events.location} />
                    </DialogContent>
                    <DialogActions>
                       {this.state.isEditClicked?
                            <div>
                                <Button raised color="primary" >Submit</Button>
                                <Button raised color="secondary"  onClick={this.handleEdit} className={classes.button} >Abort </Button>
                            </div>
                            :<Button fab color="secondary" aria-label="edit"   onClick={this.handleEdit}><Edit /> </Button> 
                        }
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

EditEvent.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(EditEvent);    
