
import Snackbar from '@material-ui/core/Snackbar';
import React from 'react';
import AlertContentWrapper from './alertContent';

const Alert = props => {
    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={props.open}
            autoHideDuration={6000}
            onClose={props.onClose}
        >
            <AlertContentWrapper
                onClose={props.handleClose}
                {...props}
            />
        </Snackbar>

    );
}

export default Alert;