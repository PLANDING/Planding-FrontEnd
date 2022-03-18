import { useState } from 'react';
import userImg from '../../assets/imgs/user.png';
import { ImgWrapper, ProfileWrapper } from '../common/ProfileBox';
import ProfileModal from './ProfileModal';

const ProfileBox = ({ profileUrl, userId, slackId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickProfileHandler = () => {
    setIsOpen(true);
  };

  return (
    <ProfileWrapper className="row-container" onClick={onClickProfileHandler}>
      <ImgWrapper>
        <img src={profileUrl ? profileUrl : userImg} width="100%" />
      </ImgWrapper>
      {isOpen && <ProfileModal setIsOpen={setIsOpen} userId={userId} slackId={slackId} />}
    </ProfileWrapper>
  );
};
export default ProfileBox;
