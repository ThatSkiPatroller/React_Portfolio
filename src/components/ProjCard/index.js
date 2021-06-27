import React from "react";
import { Card, CardMedia, Button, Box, CardContent, makeStyles, CardActions, CardActionArea } from '@material-ui/core';
import { useHover } from "react-use-gesture";
import image from '../Images/AutoWizardPicture.PNG';
import './style.css'


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: '10px',
        backgroundColor: 'rgb(175, 175, 175)',
        color: 'black'
        
        },
    media: {
        height: 200,
        width: 350,
    },  
    btn: {
        backgroundColor: 'rgb(251, 223, 186)',
        '&:hover': {
            backgroundColor: 'rgb(189, 218, 195)'
        },
        color: 'brown',
    },
    box: {
        height: 50,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    nd: {
        height: 200,
        
    }
});

function ProjCard (props) {
    const classes= useStyles();
    return (
        
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={props.img}
                        title={props.name}
                    />
                    <CardContent className={classes.nd}>
                        <h4>
                            {props.name}
                        </h4>
                        <p>
                            {props.description}
                        </p>
                    </CardContent>
                </CardActionArea>
                <Box component='span' m={1} className={classes.box}>
                <CardActions>
                    <Button size='small' className={classes.btn} href={props.repo}>
                        Github Repo
                    </Button>
                    <Button size='small' className={classes.btn} href={props.deployed}>
                        Deployed App
                    </Button>
                </CardActions>
                </Box>
            </Card>
    )
}

export default ProjCard;