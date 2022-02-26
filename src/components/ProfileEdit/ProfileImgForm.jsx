import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import profile from '../../assets/imgs/user.png';
import { setRegsiterInfo } from '../../modules/register';
import { GreenBorderLabel } from '../common/Label';
import ProfileBox from '../common/ProfileBox';

const ProfileImgForm = () => {
  const { registerInfo } = useSelector((state) => state.register);
  const { userObj } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [imgFile, setImgFile] = useState({
    fileURL: userObj.ProfileImg?.url,
  });
  const handlerChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    dispatch(setRegsiterInfo({ ...registerInfo, profileImg: e.target.files[0] }));
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      const fileURL = reader.result;
      setImgFile({ ...imgFile, file, fileURL });
    };
  };
  return (
    <Container className="col-container">
      <ProfileBox
        profileUrl={imgFile.fileURL ? imgFile.fileURL : profile}
        size={'150px'}
        borderNone
      />
      <label htmlFor="inputImg">
        <GreenBorderLabel>이미지 선택</GreenBorderLabel>
      </label>
      <input type="file" id="inputImg" onChange={handlerChange} />
    </Container>
  );
};

export default ProfileImgForm;

const Container = styled.div`
  gap: 20px;
  width: 150px;
  align-items: center;
  input {
    display: none;
  }
  label {
    width: 100%;
  }
  label > div {
    text-align: center;
    cursor: pointer;
  }
`;
