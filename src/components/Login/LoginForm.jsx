import { faAt, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { setLoggedInfo } from '../../modules/user';
import GreenBtn from '../common/Button';
import { Flex } from '../common/Flex';

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [input, setInput] = useState({ id: '', pw: '' });
  const onChangeInput = (e) => {
    const {
      target: { name, value },
    } = e;
    setInput({ ...input, [name]: value });
  };

  const [notice, setNotice] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    try {
      axios.post('/auth', { ...input }).then((res) => {
        if (res.status === 204) {
          /* 로그인 정보 없을 경우 */
          setNotice('회원 정보가 없거나, 정보가 일치하지 않습니다.');
        }
        if (res.status == 200) {
          /*로그인 성공 */
          dispatch(setLoggedInfo(true, res.data.user)); /* 
          axios.get('/ga').then((res) => {
            res.status === 200 && dispatch(setGaInfo(res.data.Ga));
          }); */
          history.push('/');
        }
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Form className="col-container" onSubmit={onSubmit}>
      <Wrapper dir="row">
        {/* 
        <span>아이디</span> */}
        <FontAwesomeIcon icon={faAt} />
        <input
          type="text"
          name="id"
          value={input.id}
          onChange={onChangeInput}
          placeholder="이메일"
        />
      </Wrapper>
      <Wrapper dir="row">
        {/* 
        <span>비밀번호</span> */}
        <FontAwesomeIcon icon={faLock} />
        <input
          type="password"
          name="pw"
          value={input.pw}
          onChange={onChangeInput}
          placeholder="비밀번호"
        />
      </Wrapper>
      <GreenBtn>로그인</GreenBtn>
      <Notice>{notice}</Notice>
    </Form>
  );
};
const Form = styled.form`
  width: 100%;
  gap: 30px;
`;
const Wrapper = styled(Flex)`
  span {
    width: 100px;
  }
  input[type='text'],
  input[type='password'] {
    width: 100%;
    padding: 10px 20px 10px 35px;
  }
  position: relative;
  svg {
    color: lightgray;
    position: absolute;
    top: 50%;
    transform: translate(80%, -50%);
  }
`;
const Notice = styled.div`
  color: #f55959;
  text-align: center;
  font-size: small;
  height: 5px;
`;
export default LoginForm;
