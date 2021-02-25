import { makeStyles } from '@material-ui/core/styles';
 

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 1400,
      border: '',
      padding: '20px 100px 20px',
      margin: '2rem',
      boxShadow: '0 0 0 0.5rem #3f51b5'
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));

  export default useStyles;