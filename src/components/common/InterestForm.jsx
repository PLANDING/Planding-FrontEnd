import { useState } from 'react';
import styled from 'styled-components';
import { GreenBorderBtn } from './Button';
import { GreenBorderLabel } from './Label';
import Select from './Select';

const InterestForm = ({ interestArr, setInterestArr }) => {
  /*interest option Arr */
  const interestObj = {
    기획: ['UI/UX 기획', '게임 기획', '프로젝트 매니저', '제품 기획'],
    프론트엔드: ['iOS', '안드로이드', '웹 프론트엔드', '웹 퍼블리셔'],
    백엔드: ['웹 서버', '블록체인', 'AI', 'DB/빅데이터', '게임 서버'],
  };

  const [first, setFirst] = useState(''); //분야
  const [second, setSecond] = useState(''); //소분야
  /* 추가 btn */
  const onClickAdd = () => {
    second &&
      !interestArr.includes(first + ':' + second) &&
      setInterestArr((prev) => [...prev, `${first}:` + second]);
  };
  /*interest block 삭제 */
  const onClickDel = (e) => {
    const {
      target: { name },
    } = e;
    setInterestArr(interestArr.filter((it, idx) => idx != parseInt(name)));
  };
  return (
    <>
      <div className="row-container">
        <Select
          label={'분야'}
          optionArr={['기획', '프론트엔드', '백엔드']}
          value={first}
          setValue={setFirst}
        />
        <Select
          label={'소분야'}
          optionArr={first ? interestObj[first] : []}
          value={second}
          setValue={setSecond}
        />
        <GreenBorderBtn type="button" onClick={onClickAdd}>
          추가
        </GreenBorderBtn>
      </div>

      {interestArr.length > 0 && (
        <TagWrapper>
          {interestArr.map((interest, idx) => (
            <GreenBorderLabel key={idx}>
              {interest.split(':')[1]}
              <button type="button" name={idx} id="del-btn" onClick={onClickDel}>
                X
              </button>
            </GreenBorderLabel>
          ))}
        </TagWrapper>
      )}
    </>
  );
};
const TagWrapper = styled.div`
  margin-top: 30px;
  gap: 10px;
  #del-btn {
    padding: 0;
    padding-left: 10px;
  }
  & > div {
    display: inline-block;
    margin: 0 10px 10px 0;
  }
`;
export default InterestForm;
