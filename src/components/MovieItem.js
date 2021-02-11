import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

function MovieItem(props){

    return (
        <>
            <div>{props.title}</div>
            <Link to={"movie/"+props.uniqId}>Edit</Link>
            {props.uniqId}
        </>
    );
}

MovieItem.propTypes = {
    title:PropTypes.string.isRequired,
    uniqId:PropTypes.string.isRequired
}

export default MovieItem;