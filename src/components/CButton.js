import { Button } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles'
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  button: {
    color: 'black',
    backgroundColor: '#abd2fa',
    margin: '-4%  5% 7% 7%',
    '&:hover': {
      background: "#abd2fa",
    }
  },
  button_icon: {
    marginTop: '5px',
    borderRadius: '100%',
    borderColor: 'black',
    background: 'white',
    color: 'black',
    padding: '0',
    alignContent: 'center',
    display: 'flex',
    alignItems: 'center',

  },

}))

export const CButton = ({ text, icon }) => {
  const classes = useStyles()
  return (
    <div className={classes.btn_P}>
      <Button className={classes.button} endIcon={icon ? (<div className={classes.button_icon}>{icon}</div>) : null} >
        {/* <Link target="_self" useHref="https://drive.google.com/file/d/1KTYrXNhp3qPcsfLzDGCIv9_y7M_3Rjyv/view?usp=sharing" download /> */}
         <a style={{ textDecoration:'none'}} href='https://drive.google.com/file/d/1KTYrXNhp3qPcsfLzDGCIv9_y7M_3Rjyv/view?usp=sharing' download >   <span className={classes.button_text}> {text}</span></a>
      </Button>
    </div>
  )
}
