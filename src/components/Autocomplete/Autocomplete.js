import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
    list: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.default,
    },

}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}


const Autocomplete = props => {
    const classes = useStyles();

    return (
        <div className='container' style={{position: 'relative'}}>
            <div style={{position: 'absolute', top: -10, right: 30, zIndex: 1000}}>
                <List
                    className={classes.list}
                    component="nav"
                >
                    {props.movies.map(elem => {
                        return (
                            <Fragment key={elem.show.id}>
                                <ListItemLink
                                    href={`/shows/${elem.show.id}`}
                                >
                                    <ListItemText primary={elem.show.name}/>
                                </ListItemLink>
                                <Divider component="li"/>
                            </Fragment>
                        )
                    })}
                </List>
            </div>
        </div>
    );
};

export default Autocomplete;
