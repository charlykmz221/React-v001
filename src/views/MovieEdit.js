import {useParams} from "react-router";
import {useEffect, useState} from "react";

function MovieEdit(){
    //const [movie, setMovie] = useState(null);
    const [title, setTitle] = useState(null);
    const [duration, setDuration] = useState(null);
    const [productionYear, setProductionYear] = useState(null);
    const [synopsis, setSynopsis] = useState(null);
    const [loaded, setLoaded] = useState(false);

    let { uniqId } = useParams();

    useEffect(()=>{
        fetch("http://localhost/api/movies/"+uniqId)
            .then((res)=>res.json())
            .then((json)=>{
                //setMovie(json.data);
                setTitle(json.data.title);
                setDuration(json.data.duration);
                setProductionYear(json.data.productionYear);
                setSynopsis(json.data.synopsis);
                setLoaded(true);
            })
    },[uniqId]);

    const handleSubmit = (evt)=>{
        evt.preventDefault();

        const data = {
                title:title,
                duration:duration,
                productionYear: productionYear,
                synopsis:synopsis
        };

        const requestOptionsPut = {
            method: 'PUT',
            body: JSON.stringify(data)
        };

        fetch('http://localhost/api/movies/'+uniqId, requestOptionsPut)
            .then(response => {console.log(response.json())})
            ;
    }

    return(
        <>
            {
                loaded?<>
                    <div>{uniqId}</div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor={"title"}>title :</label>
                            <input className="form-control" id={"title"} value={title} onChange={e => setTitle(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor={"duration"}>duration :</label>
                            <input className="form-control" id={"duration"} value={duration} onChange={e => setDuration(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor={"productionYear"}>productionYear :</label>
                            <input className="form-control" id={"productionYear"} value={productionYear} onChange={e => setProductionYear(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor={"synopsis"}>synopsis :</label>
                            <textarea className="form-control" id={"synopsis"} value={synopsis} onChange={e => setSynopsis(e.target.value)}/>
                        </div>
                        <div><input type="submit"/></div>
                    </form>
                </>:<>
                    Loading Movie
                </>
            }
        </>
    );
}

export default MovieEdit;