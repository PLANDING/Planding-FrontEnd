import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCheckInfo } from '../../modules/register';
import { Label, Point } from '../../pages/Register';
import { GreenBorderBtn } from '../common/Button';
import { Notice, Wrapper } from './PersonalInfo';

const NickNameForm = ({ onChangeInfo }) => {
  const { registerInfo, checkInfo } = useSelector((state) => state.register);
  const dispatch = useDispatch();

  const [notice, setNotice] = useState();
  /*닉네임 형식검사&중복검사*/
  const onClickValidHandler = () => {
    let valNick = /^[가-힣a-z0-9]{2,20}$/g;
    !valNick.test(registerInfo.nickName)
      ? setNotice('2-20자 영소문자/한글/숫자 [공백 및 특수문자 불가]')
      : checkExisted();
  };

  const checkExisted = () => {
    axios.get(`/auth/check/nickName/${registerInfo.nickName}`).then((res) => {
      dispatch(
        setCheckInfo({
          ...checkInfo,
          nickName: !res.data.isExisted,
        }),
      );
      setNotice(res.data.isExisted ? '이미 사용중입니다.' : '');
    });
  };
  return (
    <>
      <Wrapper className="row-container" checking={checkInfo.nickName && 'nickName'}>
        <Point>*</Point>
        <Label>닉네임</Label>
        <input
          type="text"
          name="nickName"
          value={registerInfo.nickName}
          placeholder="최대 20자, 공백 및 특수문자 불가"
          onChange={onChangeInfo}
          maxLength={20}
        />
        <GreenBorderBtn type="button" onClick={onClickValidHandler}>
          중복확인
        </GreenBorderBtn>
      </Wrapper>
      {notice && <Notice>{notice}</Notice>}
    </>
  );
};
export default NickNameForm;
