import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setCheckInfo, setRegsiterInfo } from '../../modules/register';
import { Devider, InfoWrapper } from '../../pages/Register';
import { Flex } from '../common/Flex';
import EmailForm from './EmailForm';
import NickNameForm from './NickNameForm';
import PwForm from './PwForm';

const PersonalInfo = () => {
  const { registerInfo, checkInfo } = useSelector((state) => state.register);
  const dispatch = useDispatch();

  const onChangeInfoHandler = (e) => {
    const {
      target: { name, value },
    } = e;
    dispatch(setRegsiterInfo({ ...registerInfo, [name]: value }));
    dispatch(setCheckInfo({ ...checkInfo, [name]: false }));
  };
  return (
    <>
      <Devider>
        <span>개인 정보</span>
        <hr />
      </Devider>
      <InfoWrapper className="col-container">
        <EmailForm onChangeInfo={onChangeInfoHandler} />
        <PwForm />
        <NickNameForm onChangeInfo={onChangeInfoHandler} />
      </InfoWrapper>
    </>
  );
};
export default PersonalInfo;
export const Wrapper = styled(Flex)`
  align-items: flex-start;
  input[name= ${(props) => props.checking}] {
    border: solid 2px #37c56e;
  }
  & > button {
    margin-left: 5px;
    font-size: small;
    padding: 5px 15px;
  }
`;
export const Notice = styled.div`
  font-size: x-small;
  padding-left: 170px;
  color: #f55959;
`;
