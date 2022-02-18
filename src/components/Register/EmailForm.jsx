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
        <GreenBorderBtn type="button" onClick={onClickCheckHandler}>
          중복 확인
        </GreenBorderBtn>
      </Wrapper>
      {notice && <Notice>{notice}</Notice>}
    </>
  );
};
export default EmailForm;
