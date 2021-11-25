import axios from 'axios';
import { useEffect } from 'react';
import { Cookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import '../App.css';
import { setLoggedInfo } from '../modules/user';
import Footer from './common/Footer';
import AppRouter from './Router';

function App() {
  const dispatch = useDispatch();
  const cookie=new Cookies;
  useEffect(() => {
    cookie.get('token')?
    sendJwtTokenToServer()
    :
    dispatch(setLoggedInfo(false, null));
  }, []);
  /* 자동 로그인 */
  const sendJwtTokenToServer = () => {
    axios.post('/auth')
      .then(res => {
        if (res.status == 200) {
          console.log(res.data);
          dispatch(setLoggedInfo(true, res.data.user));

        }
        else {
          //자동 로그인 실패
          console.log("none");
          dispatch(setLoggedInfo(false, null));
        }
      })
  }
  return (<>
    <AppRouter />
    <Footer />
  </>
  );
}

export default App;
