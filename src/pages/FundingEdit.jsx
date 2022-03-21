import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import FundingForm from '../components/common/FundingForm';
import Header from '../components/common/Header';
import TopDiv from '../components/common/TopDIv';
const FundingEdit = () => {
  const history = useHistory();
  const [fundingObj, setFundingObj] = useState({
    content: '',
    headline: '',
    idea: '',
    member_dev: 0,
    member_plan: 0,
    Category: { name: '' },
    Comments: [],
    Interests: [],
  });
  const [interestArr, setInterestArr] = useState([]);
  const [category, setCategory] = useState();

  const { projectId, type } = useParams();
  useEffect(() => {
    axios.get(`/project/${type}/detail/${projectId}`).then((res) => {
      setFundingObj(res.data.project);
      setInterestArr(
        res.data.project.Interests.map((interest) => interest.category + ':' + interest.name),
      );
      setCategory(res.data.project.Category.name);
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      if (interestArr.length === 0 || category === undefined)
        throw new Error('카테고리 정보를 설정해주세요.');
      if (fundingObj.member_plan === 0 && fundingObj.member_dev === 0)
        throw new Error('모집인원 정보를 설정해주세요.');
      axios
        .patch(`/project/${fundingObj.id}`, { ...fundingObj, interestArr, category })
        .then((res) => {
          res.status === 200 && history.push(`/${type}/detail/${projectId}`);
        });
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <>
      <Header />
      <div className="creation main-container">
        <TopDiv pageLabel="펀딩 수정" />
        <FundingForm
          interestArr={interestArr}
          setInterestArr={setInterestArr}
          fundingObj={fundingObj}
          setFundingObj={setFundingObj}
          category={category}
          setCategory={setCategory}
          onSubmit={onSubmit}
        />
      </div>
    </>
  );
};
export default FundingEdit;
