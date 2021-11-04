import react from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Alert from "../pages/Alert";
import FundingCompletion from "../pages/FundingCompletion";
import FundingCompletionDetail from "../pages/FundingCompletionDetail";
import FundingCreation from "../pages/FundingCreation";
import FundingProgress from "../pages/FundingProgress";
import FundingProgressDetail from "../pages/FundingProgressDetail";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Profile from "../pages/Profile";
import Project from "../pages/Project";
import Register from "../pages/Register";

const AppRouter=()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route exact path="/progress" component={FundingProgress}/>
                <Route exact path="/progress/detail" component={FundingProgressDetail}/>
                <Route exact path="/completion" component={FundingCompletion}/>
                <Route exact path="/completion/detail" component={FundingCompletionDetail}/>
                <Route path="/creation" component={FundingCreation}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/project" component={Project}/>
                <Route path="/alert" component={Alert}/>
            </Switch>
        </BrowserRouter>
    )
}
export default AppRouter;