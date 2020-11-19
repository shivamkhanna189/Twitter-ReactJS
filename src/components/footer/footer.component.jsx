import React from 'react';
import "./footer.styles.css"
import Typography from '@material-ui/core/Typography';

export  function Copyright() {
    return (
        <div className="footer">
             <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
       {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>   
        </div>
     
    );
  }


  export default function Footer(){
      return (<Copyright/>)
  }

