import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCheckInfo, setRegsiterInfo } from '../../modules/register';
import { Label, Point } from '../../pages/Register';
import { Flex } from '../common/Flex';
import { Notice, Wrapper } from './PersonalInfo';

const PwForm = () => {
  const { registerInfo, checkInfo } = useSelector((state) => state.register);
  const dispatch = useDispatch();

  const [pwNotice, setPwNotice] = useState();
  const [pwChecknotice, setPwCheckNotice] = useState();
  const onChangeInfo = (e) => {
    const {
      target: { name, value },
    } = e;
    dispatch(setRegsiterInfo({ ...registerInfo, [name]: value }));
    dispatch(setCheckInfo({ ...checkInfo, [name]: false }));

    name === 'pw' && checkedValidPW(value);
    name === 'pwCheck' && pwCompareHandler(value);
  };

  /* 비밀번호 조건 검사 */
  const checkedValidPW = (value) => {
    let valPw = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/g;

    if (!valPw.test(value)) {
      setPwNotice('8-16자, 숫자/영문/특수문자 각 1자리 이상');
    } else {
      value.search(/\s/) != -1
        ? setPwNotice('8-16자, 숫자/영문/특수문자 각 1자리 이상')
        : dispatch(setCheckInfo({ ...checkInfo, pw: true }));
    }
  };
  /* 비밀번호 조건 검사 */
  const pwCompareHandler = (value) => {
    const isSame = registerInfo.pw === value;
    !isSame && setPwCheckNotice('비밀번호가 일치하지 않습니다.');
    dispatch(setCheckInfo({ ...checkInfo, pwCheck: isSame }));
  };
  return (
    <>
      <Flex gap="20px" height="30px">
        <Wrapper className="row-container">
          <Point>*</Point>
          <Label>비밀번호</Label>
          <input
            type="password"
            name="pw"
            value={registerInfo.pw}
            placeholder="8-16자, 숫자/영문/특수문자 각 1자리 이상"
            onChange={onChangeInfo}
          />
        </Wrapper>
        {!checkInfo.pw && pwNotice && <Notice>{pwNotice}</Notice>}
      </Flex>
      <Flex gap="20px" height="30px">
        <Wrapper className="row-container" checking={checkInfo.pwCheck && 'pwCheck'}>
          <Point>*</Point>
          <Label>비밀번호 확인</Label>
          <input
            type="password"
            name="pwCheck"
            value={registerInfo.pwCheck}
            placeholder="8-16자, 숫자/영문/특수문자 각 1자리 이상"
            onChange={onChangeInfo}
          />
        </Wrapper>
        {!checkInfo.pwCheck && pwChecknotice && <Notice>{pwChecknotice}</Notice>}
      </Flex>
    </>
  );
};
export default PwForm;
