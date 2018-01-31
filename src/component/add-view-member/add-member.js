import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
    },
  });
function AddMember (props) {
    const { classes } = this.props;

    return (
        <FormControl className={classes.formControl} aria-describedby="name-helper-text">
          <InputLabel htmlFor="name-helper">Name</InputLabel>
          <Input id="name-helper" onChange={props.handleChangeName} />
          <InputLabel htmlFor="name-helper">Date of Joining</InputLabel>
          <Input id="name-helper"  onChange={props.handleChangeDoj} />
          <InputLabel htmlFor="name-helper">Designation</InputLabel>
          <Input id="name-helper"  onChange={props.handleChangeDesignation} />
          <FormHelperText id="name-helper-text">{props.errorMsg}</FormHelperText>
        </FormControl>
    );

}

ComposedTextField.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(AddMember);