import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import GreenBtn from '../components/common/Button';
import Header from '../components/common/Header';
import TopDiv from '../components/common/TopDIv';
import PersonalInfo from '../components/Register/PersonalInfo';
import SkillInfo from '../components/Register/SkillInfo';
import { resetCheckInfo } from '../modules/register';

const Register = () => {
  const { registerInfo, interestArr, skillArr, checkInfo } = useSelector((state) => state.register);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      if (!(checkInfo.email && checkInfo.pw && checkInfo.pwCheck && checkInfo.nickName)) {
        throw new Error('기재사항 조건들을 확인해주세요.');
      }
      if (registerInfo.email === '' || registerInfo.pw === '' || registerInfo.nickName === '') {
        throw new Error('필수 항목을 기재해주세요.');
      }

      axios
        .post('/auth/register', { ...registerInfo, interestArr: interestArr, skillArr: skillArr })
        .then((res) => {
          dispatch(resetCheckInfo());
          res.status === 201 && history.push('/login');
        });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <Header />
      <div className="main-container">
        <TopDiv pageLabel={'회원 가입'} />
        <Form className="col-container" onSubmit={onSubmit}>
          <PersonalInfo />
          <SkillInfo />
          <GreenBtn animation>회원 가입</GreenBtn>
        </Form>
      </div>
    </>
  );
};
const Form = styled.form`
  width: 50%;
  margin-top: 50px;
  gap: 30px;
  input[type='text'],
  input[type='email'],
  input[type='number'],
  input[type='password'],
  input[type='url'] {
    flex: 1;
  }
  & > button {
    width: 50%;
    align-self: center;
    margin-top: 30px;
  }
`;
export const Point = styled.span`
  color: #f55959;
  margin-right: 5px;
`;
export const Label = styled.span`
  width: 150px;
`;
export const Devider = styled.div`
  width: 100%;
  span {
    color: #37c56e;
    padding: 10px;
  }
  hr {
    border: none;
    border-bottom: solid thin #37c56e;
  }
`;
export const InfoWrapper = styled.div`
  align-items: center;
  gap: 50px;
  & > div {
    width: 65%;
  }
  & > .col-container > span {
    margin-bottom: 30px;
  }
`;
export default Register;
