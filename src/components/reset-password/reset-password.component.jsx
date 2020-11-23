import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },

  submit: {
    margin: theme.spacing(1),
  },
  cancel :{
      textDecoration : 'none' 
  },
  remember :{
    float: 'left'
  }
}));

export default function ResetPassword() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
       
        <Typography component="h1" variant="h5">
         Change Password
        </Typography>

        <form className={classes.form} noValidate>
          <TextField
            type="password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="New Password"
            name="email"
            autoComplete="email"
            autoFocus
          />
              <TextField
            type="password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Confirm New Password"
            name="email"
            autoComplete="email"
           
          />
          <Button
            type="submit"
            medium
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Change Password
          </Button>
        <Link to="login" className={classes.cancel}>
        <Button
            type="button"
            medium
            variant="contained"
            className={classes.submit}
          >
            Cancel
          </Button>
        </Link>
         
         
        </form>
      </div>
      <Box mt={8}>
        
      </Box>
    </Container>
  );
}