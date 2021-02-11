import {useEffect, useState} from 'react'
import MovieItem from "../components/MovieItem";

function Movies(){
    const [data, setData]=useState(null);

    useEffect(()=>{
        fetch("http://localhost/api/movies")
            .then((res)=>res.json())
            .then((json)=>{
                console.log(json.data);
                setData(json);
            })
    },[]);


    return (
        <>
            {data?data.data.map((movie)=>
                <MovieItem key={movie.uniqId} title={movie.title} uniqId={movie.uniqId}>{movie.title}</MovieItem>
            ):<div>Loading</div>}
            </>
    );
}

export default Movies;