import React from "react";
import { Card, CardMedia, Button, Typography, CardContent, makeStyles, CardActions, CardActionArea } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: '10px',
        },
    media: {
        height: 200,
        width: 350,
    },
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
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='h2'>
                            {props.name}
                        </Typography>
                        <Typography variant='body2' color='textSecondary' component='p'>
                            {props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size='small' color='primary'>
                        Github Repo
                    </Button>
                    <Button size='small' color='primary'>
                        Deployed App
                    </Button>
                </CardActions>
            </Card>
        
    )
}

export default ProjCard;