import { BrowserRouter, Route, Switch } from "react-router-dom";
import Alert from "../pages/Alert";
import FundingCompletion from "../pages/FundingCompletion";
import FundingCompletionDetail from "../pages/FundingCompletionDetail";
import FundingCreation from "../pages/FundingCreation";
import FundingEdit from "../pages/FundingEdit";
import FundingProgress from "../pages/FundingProgress";
import FundingProgressDetail from "../pages/FundingProgressDetail";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Matching from "../pages/Matching";
import Profile from "../pages/Profile";
import Project from "../pages/Project";
import Register from "../pages/Register";
import ProfileEdit from "../pages/ProfileEdit"

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
                <Route path="/modification" component={FundingEdit} />
                <Route path="/creation" component={FundingCreation}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/profile/edit" component={ProfileEdit}/>
                <Route exact path="/project" component={Project}/>
                <Route exact path="/project/matching/:projectId" component={Matching}/>
                <Route path="/alert" component={Alert}/>
            </Switch>
        </BrowserRouter>
    )
}
export default AppRouter;