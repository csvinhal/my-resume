
import Snackbar from '@material-ui/core/Snackbar';
import React from 'react';
import AlertContentWrapper from './alertContent';

const Alert = (props) => {
  const { open, onClose, handleClose } = props;

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
    >
      <AlertContentWrapper
        onClose={handleClose}
        {...props}
      />
    </Snackbar>

  );
};

export default Alert;
