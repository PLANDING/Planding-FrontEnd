import { useState } from 'react';
import userImg from '../../assets/imgs/user.png';
import { ImgWrapper, ProfileWrapper } from '../common/ProfileBox';
import ProfileModal from './ProfileModal';

const ProfileBox = ({ profileUrl, slackId, nickName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickProfileHandler = () => {
    setIsOpen(true);
  };

  return (
    <ProfileWrapper className="row-container" onClick={onClickProfileHandler}>
      <ImgWrapper>
        <img src={profileUrl ? profileUrl : userImg} width="100%" />
      </ImgWrapper>
      {isOpen && <ProfileModal setIsOpen={setIsOpen} slackId={slackId} nickName={nickName} />}
    </ProfileWrapper>
  );
};
export default ProfileBox;
