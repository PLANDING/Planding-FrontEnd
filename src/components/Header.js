import react, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import "../stylesheets/header.css"
const Header=()=>{
    const [isLoggedIn, setIsLoggedIn]=useState(false);
    const location= useLocation();
    const history= useHistory();
    const onClickNav=(e)=>{
        history.push("/"+e.target.id);
    }
    return(<div className="header row-container">
    <div>
        {/*로고*/}
    </div>
    <nav className="row-container">
        <button onClick={onClickNav} id="completion" className={location.pathname=="/completion"&&"cur"}>펀딩 완료</button>
        <button onClick={onClickNav} id="progress" className={location.pathname=="/progress"&&"cur"}>펀딩 진행</button>
        <button onClick={onClickNav} id="project" className={location.pathname=="/project"&&"cur"}>나의 프로젝트</button>
        {isLoggedIn?<button onClick={onClickNav} id="profile">프로필</button>:<button onClick={onClickNav} id="login" className="border-btn">로그인</button>}
    </nav>
    </div>)
}
export default Header;