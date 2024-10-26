import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';
import Modal from '../common/Modal';
import ProfileBox from '../common/ProfileBox';
import 'react-quill/dist/quill.snow.css';
import QuillContent from '../common/QuillContent';

const ContentBox = ({ writer, isWriter, content, type }) => {
  const history = useHistory();
  const { projectObj } = useSelector((state) => ({ projectObj: state.project.projectObj }));
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const onClickMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };
  const { projectId } = useParams();
  const onClickEditDel = (e) => {
    const {
      target: { id },
    } = e;
    id === 'edit' ? history.push(`/modification/${type}/${projectId}`) : deleteProject();
  };

  const deleteProject = async () => {
    if (window.confirm('프로젝트를 삭제 하시겠습니까?')) {
      try {
        await axios.delete(`/project/${projectObj.id}`).then((res) => {
          res.status === 200 && history.push('/progress');
        });
      } catch (error) {
        alert(error.message);
      }
    }
  };
  return (
    <Wrapper isGreen={type === 'progress'}>
      <div className="row-container">
        <Headline>기획 내용</Headline>
        <ProfileBox
          nickName={writer.nickName}
          userId={writer.id}
          profileUrl={writer.ProfileImg?.url}
          isNickName
        />
        {isWriter && <FontAwesomeIcon id="menu" onClick={onClickMenu} icon={faEllipsisV} />}
        {isOpenMenu && (
          <Modal setIsOpen={setIsOpenMenu}>
            <Menu className="col-container">
              <Button id="edit" onClick={onClickEditDel}>
                수정
              </Button>
              <Button id="del" onClick={onClickEditDel}>
                삭제
              </Button>
            </Menu>
          </Modal>
        )}
      </div>
      {console.log(content)}
      <QuillContent content={content} />
    </Wrapper>
  );
};
export default ContentBox;
const Wrapper = styled.div`
  border-radius: 10px;
  .row-container:nth-child(1) {
    border-bottom: solid thin #37c56e;
    padding: 0 20px;
    margin-top: 0;
    #menu {
      margin-left: 20px;
      cursor: pointer;
      color: ${(props) => (props.isGreen ? `#FFFFF` : `#37C56E`)};
    }
    ${(props) =>
      props.isGreen &&
      `
        background-color: #37C56E;
        border-radius: 8px 8px 0 0;
        color: white;
    `}
  }
`;
const Headline = styled.h4`
  flex: 1;
`;
const Menu = styled.div`
  width: 100px;
  text-align: center;
  position: absolute;
  background: white;
  font-size: small;
  padding: 0px 20px;
  transform: translate(-80%, 30%);
  border-radius: 5px;
  color: #5f5f5f;
  border: solid thin #37c56e;
  #del:hover {
    color: #f55959;
  }
  #edit {
    border-bottom: solid thin #37c56e;
  }
  #edit:hover {
    color: #37c56e;
  }
  box-shadow: 2px 2px 10px 2px #00000020;
`;
const Button = styled.button`
  padding: 10px;
  cursor: pointer;
`;
