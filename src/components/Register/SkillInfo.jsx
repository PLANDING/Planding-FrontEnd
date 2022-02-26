import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setRegsiterInfo } from '../../modules/register';
import { Devider, InfoWrapper, Label } from '../../pages/Register';
import InterestForm from '../common/InterestForm';
import SkillForm from '../common/SkillForm';
import GithubForm from './GithubForm';

const SkillInfo = () => {
  const { registerInfo } = useSelector((state) => state.register);
  const dispatch = useDispatch();

  const onChangeInfoHandler = (e) => {
    const {
      target: { name, value },
    } = e;
    dispatch(setRegsiterInfo({ ...registerInfo, [name]: value }));
  };
  return (
    <>
      <Devider>
        <span>기술 정보</span>
        <hr />
      </Devider>
      <InfoWrapper className="col-container">
        <FieldWrapper className="row-container">
          <Label>개인 사이트</Label>
          <input
            type="url"
            name="site"
            value={registerInfo.site}
            placeholder="ex. 블로그, 노션 주소"
            onChange={onChangeInfoHandler}
          />
        </FieldWrapper>
        <GithubForm onChange={onChangeInfoHandler} />
        <SkillForm />
        <InterestForm />
      </InfoWrapper>
    </>
  );
};
export default SkillInfo;

export const FieldWrapper = styled.div`
  & > button {
    margin-left: 5px;
    font-size: small;
    padding: 5px 15px;
  }
  ${(props) =>
    props.skill &&
    `
    display:flex;
    flex-direction:row;
    &>div{
        flex:1;
    }
    `}
`;
