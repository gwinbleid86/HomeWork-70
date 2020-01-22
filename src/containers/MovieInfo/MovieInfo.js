import React, {useEffect, useState} from 'react';
import axiosFilms from "../../axios-base";
import ShowFilmInfo from '../../components/SingleFilm/ShowFilmInfo';
import Spinner from "../../components/UI/Spinner/Spinner";

const MovieInfo = (props) => {

    const initialShow = null;
    const [singleShow, setSingleShow] = useState(initialShow);

    const getSingleShow = async () => {
        const response = await axiosFilms.get(`/shows/${props.match.params.id}`);
        setSingleShow(response.data);
    };

    useEffect(() => {
        getSingleShow()
    }, [props.match.params.id]);

    return (
        singleShow ? <ShowFilmInfo movie={singleShow}/> : <Spinner/>
    );
};

export default MovieInfo;