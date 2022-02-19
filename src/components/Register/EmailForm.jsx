import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCheckInfo, setRegsiterInfo } from '../../modules/register';
import { Label, Point } from '../../pages/Register';
import GreenBtn, { GreenBorderBtn } from '../common/Button';
import { Notice, Wrapper } from './PersonalInfo';

const EmailForm = () => {
  const { registerInfo, checkInfo } = useSelector((state) => state.register);
  const dispatch = useDispatch();

  const [notice, setNotice] = useState();
  const [checkExisted, setCheckExisted] = useState(false);
  const onClickCheckHandler = () => {
    axios.get(`/auth/check/email/${registerInfo.email}`).then((res) => {
      setNotice(res.data.isExisted ? '이미 가입된 이메일입니다.' : '');
      setCheckExisted(!res.data.isExisted);
    });
  };

  const [code, setCode] = useState();
  const [authCode, setAuthCode] = useState();
  const onClickVerifyHandler = () => {
    axios
      .post(`/auth/verify`, { email: registerInfo.email })
      .then((res) => setAuthCode(res.data.code));
  };
  const onClickConfirmHandler = () => {
    authCode === code &&
      dispatch(
        setCheckInfo({
          ...checkInfo,
          email: true,
        }),
      );
  };

  const onChangeInfo = (e) => {
    const {
      target: { name, value },
    } = e;
    dispatch(setRegsiterInfo({ ...registerInfo, [name]: value }));
    dispatch(setCheckInfo({ ...checkInfo, [name]: false }));
  };
  return (
    <>
      <Wrapper className="row-container">
        <Point>*</Point>
        <Label>아이디</Label>
        <input
          type="email"
          name="email"
          value={registerInfo.id}
          placeholder="이메일"
          onChange={onChangeInfo}
        />
        {!checkExisted ? (
          <GreenBorderBtn type="button" onClick={onClickCheckHandler}>
            중복 확인
          </GreenBorderBtn>
        ) : (
          <GreenBtn type="button" onClick={onClickVerifyHandler}>
            메일 인증
          </GreenBtn>
        )}
      </Wrapper>
      {checkExisted && (
        <Wrapper className="row-container" checking={checkInfo.email && 'code'}>
          <input
            type="number"
            maxLength="6"
            name="code"
            value={code}
            placeholder="인증번호"
            onChange={(e) => setCode(e.target.value)}
          />
          <GreenBorderBtn type="button" onClick={onClickConfirmHandler}>
            확인
          </GreenBorderBtn>
        </Wrapper>
      )}
      {notice && <Notice>{notice}</Notice>}
    </>
  );
};
export default EmailForm;
