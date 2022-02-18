import { useState } from 'react';
import styled from 'styled-components';
import GreenBtn from '../components/common/Button';
import Header from '../components/common/Header';
import PersonalInfo from '../components/Register/PersonalInfo';
import SkillInfo from '../components/Register/SkillInfo';
import TopDiv from '../components/common/TopDIv';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

const Register = () => {
  const { registerInfo, checkInfo } = useSelector((state) => state.register);
  const history = useHistory();

  const [interestArr, setInterestArr] = useState([]);
  const [skillArr, setSkillArr] = useState([]);

  const onChangeInfo = (e) => {
    /* 
    const {
      target: { name, value },
    } = e;

    setRegisterInfo((prev) => ({ ...prev, [name]: value }));
    name === 'email' && setCheck((p) => ({ ...p, email: false }));
    name === 'nickName' && setCheck((p) => ({ ...p, nickName: false })); */
  };

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      if (checkInfo.email && checkInfo.pw && checkInfo.pwCheck && checkInfo.nickName) {
        throw new Error('기재사항 조건들을 확인해주세요.');
      }
      if (registerInfo.email === '' || registerInfo.pw === '' || registerInfo.nickName === '') {
        throw new Error('필수 항목을 기재해주세요.');
      }

      axios
        .post('/auth/register', { ...registerInfo, interestArr: interestArr, skillArr: skillArr })
        .then((res) => {
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
          <PersonalInfo onChangeInfo={onChangeInfo} />
          <SkillInfo
            registerInfo={registerInfo}
            onChangeInfo={onChangeInfo}
            interestArr={interestArr}
            setInterestArr={setInterestArr}
            skillArr={skillArr}
            setSkillArr={setSkillArr}
          />
          <GreenBtn>회원 가입</GreenBtn>
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
  gap: 30px;
  & > div {
    width: 65%;
  }
  & > .col-container #label {
    margin-bottom: 30px;
  }
`;
export default Register;
