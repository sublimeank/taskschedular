import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Button from 'material-ui/Button';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    button: {
        margin: theme.spacing.unit,
      },
      input: {
        display: 'none',
      },
});

function MemberView (props) {
    const { classes } = props;
    return (
     
    <div>
        {props.members.length > 0 && props.members.map( (x) => { 
            return (<ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading} > {x.name} </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            {`ID: ${x._id}   DOJ: ${x.doj} DESIGNATION: ${x.designation} `}
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                )
     } ) }
      <Button raised color="primary" className={classes.button} onClick={props.handleAddMember} >
        Add member
      </Button>
    </div>
        );
                    }
                    export default withStyles(styles)(MemberView);                

