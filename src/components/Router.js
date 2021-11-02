import react from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Alert from "../routes/Alert";
import FundingCompletion from "../routes/FundingCompletion";
import FundingCreation from "../routes/FundingCreation";
import FundingProgress from "../routes/FundingProgress";
import Login from "../routes/Login";
import Main from "../routes/Main";
import Profile from "../routes/Profile";
import Project from "../routes/Project";
import Register from "../routes/Register";

const AppRouter=()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route exact path="/progress" component={FundingProgress}/>
                <Route exact path="/completion" component={FundingCompletion}/>
                <Route path="/creation" component={FundingCreation}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/project" component={Project}/>
                <Route path="/alert" component={Alert}/>
            </Switch>
        </BrowserRouter>
    )
}
export default AppRouter;