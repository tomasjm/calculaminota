import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
        flexGrow: 1,
    },
    appbar: {
        alignItems: 'center'
    },
    text: {
        color: "#fff"
    }
};

function SimpleAppBar(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} position="static" color="primary">
                <Toolbar>
                    <Typography className={classes.text} variant="h6">
                        Calcula Mi Nota
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

SimpleAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);