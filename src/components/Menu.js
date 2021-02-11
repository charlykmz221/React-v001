import {Link} from "react-router-dom";

function Menu(){

    return (
        <>
            <Link to={"/"}>Home</Link><br/>
            <Link to={"/movies"}>Movies</Link><br/>
        </>
    );
}

export default Menu;