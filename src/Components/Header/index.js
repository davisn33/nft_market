import React from 'react'
import {Divider, makeStyles} from "@material-ui/core"

const Header = () => {
    const classes=useStyles();
    return (
        <div className={classes.root}>
            <Divider/>
        </div>
    )
}


const useStyles = makeStyles({
    root: {
        height:50,
    },
  });

export default Header
