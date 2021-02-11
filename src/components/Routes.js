import {Switch, Route} from "react-router-dom"
import Menu from "./Menu";
import Movies from "../views/Movies";
import MovieEdit from "../views/MovieEdit";

function Routes()
{
    return (
        <Switch>
            <Route path="/about">
                <div>About</div>
            </Route>
            <Route path="/contact/:id">
                <div>contact</div>
            </Route>
            <Route path="/contact">
                <div>Les contacts</div>
            </Route>
            <Route path="/movies">
                <Movies/>
            </Route>
            <Route path="/movie/:uniqId">
                <MovieEdit/>
            </Route>
            <Route path="/">
                <div>Home</div>
            </Route>
        </Switch>
    );
}

export default Routes;