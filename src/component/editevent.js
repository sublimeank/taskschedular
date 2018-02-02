import React from 'react';
import Dialog, { DialogActions, DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Icon from 'material-ui/Icon';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Reboot from "material-ui/Reboot";
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
                <Reboot/>
                <Button onClick={this.handleClickOpen}>Edit Event</Button>
                <div className={classes.root}>
                    <Grid container spacing={24}>
                        <Dialog open={this.state.open} onClose={this.handleClose} >
                            <DialogTitle>Edit Event</DialogTitle>
                            <DialogContent>
                                <Grid item xs={12}>
                                <TextField
                                    disabled ={!this.state.isEditClicked}
                                    label='event name'
                                    defaultValue={this.props.events.name} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Start Date"
                                    type="date"
                                    disabled ={!this.state.isEditClicked}
                                    defaultValue={this.props.events.startDate} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <TextField
                                    label="End Date"
                                    type="date"
                                    disabled ={!this.state.isEditClicked}
                                    defaultValue={this.props.events.endDate} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Start Time"
                                    type="time"
                                    disabled ={!this.state.isEditClicked}
                                    defaultValue={this.props.events.startTime} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <TextField
                                    label="EndTime"
                                    type="time"
                                    disabled ={!this.state.isEditClicked}
                                    defaultValue={this.props.events.endTime} />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField
                                    label='Event Location'
                                    disabled ={!this.state.isEditClicked}
                                    defaultValue={this.props.events.location} />
                                </Grid>
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
                    </Grid>
                </div>
            </div>
        )
    }
}

EditEvent.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(EditEvent);    
