import axios from 'axios';
import { useEffect } from 'react';
import { Cookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import '../App.css';
import { setGaInfo, setLoggedInfo } from '../modules/user';
import Footer from './common/Footer';
import AppRouter from './Router';

function App() {
  const dispatch = useDispatch();
  const cookie = new Cookies();
  useEffect(() => {
    cookie.get('token') ? sendJwtTokenToServer() : dispatch(setLoggedInfo(false, null));
  }, []);

  const sendJwtTokenToServer = () => {
    axios.post('/auth').then((res) => {
      if (res.status == 200) {
        dispatch(setLoggedInfo(true, res.data.user));
        /* axios.get('/ga').then((res) => {
          res.status === 200 && dispatch(setGaInfo(res.data.Ga));
        }); */
      } else {
        dispatch(setLoggedInfo(false, null));
      }
    });
  };
  return (
    <>
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
