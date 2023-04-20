import Alert from '@mui/material/Alert';

const Notifier = ({ severity, message }) => {
    return (
      <Alert severity={severity}>
        {message}
      </Alert>
    );
  };
  
  export default Notifier;
