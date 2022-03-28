import { useState } from 'react';
import { useHistory } from 'react-router';
import FundingForm from '../components/common/FundingForm';
import Header from '../components/common/Header';
import TopDiv from '../components/common/TopDIv';
import axios from 'axios';
import { useSelector } from 'react-redux';

const FundingCreation = () => {
  /*init data */
  const history = useHistory();
  const { userObj } = useSelector((state) => ({ userObj: state.user.userObj }));
  const [fundingObj, setFundingObj] = useState({
    idea: '',
    headline: '',
    content: '',
    member_plan: 0,
    member_dev: 0,
  });
  const [interestArr, setInterestArr] = useState([]);
  const [category, setCategory] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      if (interestArr.length === 0 || category === undefined)
        throw new Error('카테고리 정보를 설정해주세요.');
      if (fundingObj.member_plan === 0 && fundingObj.member_dev === 0)
        throw new Error('모집인원 정보를 설정해주세요.');
      axios
        .post(`/project/creation/${userObj?.id}`, { ...fundingObj, interestArr, category })
        .then((res) => {
          res.status == 200 && history.push('/progress');
        });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <Header />
      <div className="creation main-container">
        <TopDiv pageLabel="펀딩 생성" />
        <FundingForm
          interestArr={interestArr}
          setInterestArr={setInterestArr}
          fundingObj={fundingObj}
          setFundingObj={setFundingObj}
          setCategory={setCategory}
          onSubmit={onSubmit}
        />
      </div>
    </>
  );
};
export default FundingCreation;
