import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
        card: {
            margin: 20,
            maxWidth: 500,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
    }))
;

export default function RecipeReviewCard(props) {
    const classes = useStyles();

    function createMarkup() {
        return {__html: props.movie.summary};
    }

    return (
        <Card className={classes.card}>
            <CardHeader
                title={props.movie.name}
                subheader={props.movie.premiered}
            />
            <CardMedia
                className={classes.media}
                image={props.movie.image.medium}
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" dangerouslySetInnerHTML={createMarkup()}/>
            </CardContent>
        </Card>
    );
}
