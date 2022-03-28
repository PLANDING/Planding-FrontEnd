import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { setRegsiterInfo } from '../../modules/register';
import { Devider, InfoWrapper, Label } from '../../pages/Register';
import { Flex } from '../common/Flex';
import InterestForm from '../common/InterestForm';
import SkillForm from '../common/SkillForm';
import GithubForm from './GithubForm';
import slackLogo from '../../assets/imgs/slack_logo.png';
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
        <FieldWrapper dir="row">
          <Label>슬랙 아이디</Label>
          <Flex dir="column" gap="20px" width="70%">
            <input
              type="email"
              name="slackId"
              value={registerInfo.slackId}
              placeholder="slack 이메일 주소"
              onChange={onChangeInfoHandler}
            />
            <Flex dir="row" gap="20px">
              <img src={slackLogo} height="15px" />
              <Span>
                이후 프로젝트 팀원에게만 공개되는 정보로 팀원과의 소통 방법으로 사용됩니다.
                <br />
                (프로필 수정에서 추가 가능)
              </Span>
            </Flex>
          </Flex>
        </FieldWrapper>
        <FieldWrapper dir="row">
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
        <InterestForm type="register" />
      </InfoWrapper>
    </>
  );
};
export default SkillInfo;

export const FieldWrapper = styled(Flex)`
  & > button {
    margin-left: 5px;
    font-size: small;
    padding: 5px 15px;
  }
  ${(props) =>
    props.skill &&
    css`
      display: flex;
      flex-direction: row;
      & > div {
        flex: 1;
      }
    `}
`;
const Span = styled.span`
  font-size: small;
  color: #00000070;
  font-weight: lighter;
`;
