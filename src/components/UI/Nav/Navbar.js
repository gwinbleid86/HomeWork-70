import React, {Fragment, useEffect, useState} from 'react';

import axios from '../../../axios-base';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import {fade, makeStyles} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from "../../Autocomplete/Autocomplete";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
}));

export default function SearchAppBar() {
    const classes = useStyles();

    const initialChangeValue = "";
    const initialShows = [];
    const [changeValue, setChangeValue] = useState(initialChangeValue);
    const [shows, setShows] = useState(initialShows);

    const fetchShows = async () => {
        const response = await axios("/search/shows?q=" + changeValue);
        setShows(response.data);
    };

    const valueChanged = event => {
        event.persist();
        setChangeValue(event.target.value);
        fetchShows();
    };
    useEffect(() => {
        fetchShows()
    }, [changeValue]);

    return (
        <Fragment>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" noWrap>
                            TV Shows
                        </Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{'aria-label': 'search'}}
                                value={changeValue}
                                onChange={e => valueChanged(e)}
                            />

                        </div>
                    </Toolbar>
                </AppBar>
            </div>
            <Autocomplete
                movies={shows}
            />
        </Fragment>
    );
}
