import styled from 'styled-components';
import ProfileBox from '../common/ProfileBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import GreenLabel, { GreenBorderLabel } from '../common/Label';
import GreenBtn from '../common/Button';
import LevelImgs from '../../assets/objects/LevelImgs';
import axios from 'axios';
import { useSelector } from 'react-redux';
const MatchingCard = ({ profile, projectId }) => {
  const { userObj } = useSelector((state) => ({ userObj: state.user.userObj })); //계정 user 정보
  const alertObj = {
    from: userObj?.id,
    to: profile.id,
    projectId: projectId,
  };
  /* 참여하기 요청 */
  const onClickCollabo = () => {
    if (
      window.confirm(
        '해당 프로젝트에 협업요청 하시겠습니까?\n(개발자가 수락 시, 프로젝트에 참여가능 합니다.)',
      )
    ) {
      axios
        .post('/alert/request', {
          ...alertObj,
          content: `님이 플랜딩의 추천시스템을 통해 개발 협업을 요청했습니다.`,
        })
        .then((res) => res.status == 200 && alert('협업요청이 완료되었습니다.'));
    }
  };
  return (
    <Container className="row-container">
      <GreenBtn onClick={onClickCollabo} animation>
        협업요청
      </GreenBtn>
      <hr />
      <LineBox></LineBox>
      <Card className="row-container">
        <Profile className="col-container">
          <ProfileBox
            size={'120px'}
            userId={profile.id}
            profileUrl={profile.ProfileImg?.url}
            nickName={profile.nickName}
            isNickName={false}
          />
          <div className="row-container">
            <img
              src={require('../../assets/imgs/' + LevelImgs[profile.level / 4].fill).default}
              width="24px"
            />
            {profile.nickName}
          </div>
        </Profile>
        <Content className="col-container">
          <Wrapper className="row-container">
            <span>
              <FontAwesomeIcon icon={faGithub} /> Github
            </span>
            <a href={profile.github}>{profile.github}</a>
          </Wrapper>
          <Wrapper className="row-container">
            <span>Dev Blog</span>
            <a href={profile.site}>{profile.site}</a>
          </Wrapper>
          <LabelWrapper className="col-container">
            <span>관심분야</span>
            <div>
              {profile.Interests.map((interest, index) => (
                <GreenBorderLabel key={index}>{interest.name}</GreenBorderLabel>
              ))}
            </div>
          </LabelWrapper>
          <LabelWrapper className="col-container">
            <span>기술 스택</span>
            <div>
              {profile.Skills.map((skill, index) => (
                <GreenLabel key={index}>{skill.name}</GreenLabel>
              ))}
            </div>
          </LabelWrapper>
        </Content>
      </Card>
    </Container>
  );
};
export default MatchingCard;
const Container = styled.div`
  & > :is(button, hr) {
    align-self: flex-start;
    margin: 0;
  }
  & > hr {
    border: none;
    border-bottom: solid thin #37c56e;
    width: 100px;
    margin-top: 20px;
  }
`;
const Card = styled.div`
  border: solid thin #37c56e;
  width: 900px;
  padding: 30px;
  border-radius: 15px;
  gap: 20px;
`;
const Profile = styled.div`
  flex: 0.2;
  align-items: center;
  gap: 20px;
  & > div:nth-child(1) {
    gap: 0;
  }
  & > div:nth-child(2) {
    gap: 5px;
  }
`;
const Content = styled.div`
  gap: 10px;
  flex: 0.8;
  a {
    color: #bfbfbf;
  }
  & > div > span:nth-child(1) {
    width: 100px;
  }
`;
const LabelWrapper = styled.div`
  gap: 10px;
  & > div > div {
    display: inline-block;
    margin-right: 5px;
  }
`;
const Wrapper = styled.div``;
const LineBox = styled.div`
  border-left: solid thin #37c56e;
  position: absolute;
  height: 300px;
  transform: translate(50px, 20%);
`;
