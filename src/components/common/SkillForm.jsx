import { useState } from 'react';
import styled from 'styled-components';
import { GreenBorderBtn } from './Button';
import GreenLabel from './Label';

const SkillForm = ({ skillArr, setSkillArr }) => {
  const [skill, setSkill] = useState('');
  const onClickAdd = () => {
    skill && setSkillArr((prev) => [...prev, skill]);
    setSkill('');
  };
  const onClickDel = (e) => {
    const {
      target: { name },
    } = e;
    setSkillArr(skillArr.filter((it, idx) => idx != parseInt(name)));
  };
  return (
    <div className="col-container">
      <Wrapper className="row-container">
        <input
          type="text"
          placeholder="언어|프레임워크|라이브러리"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
        <GreenBorderBtn type="button" onClick={onClickAdd}>
          추가
        </GreenBorderBtn>
      </Wrapper>

      {skillArr.length > 0 && (
        <TagWrapper>
          {skillArr.map((skill, idx) => (
            <GreenLabel key={idx}>
              {skill}
              <button type="button" name={idx} id="del-btn" onClick={onClickDel}>
                x
              </button>
            </GreenLabel>
          ))}
        </TagWrapper>
      )}
    </div>
  );
};
export default SkillForm;
const Wrapper = styled.div`
  & > button {
    margin-left: 5px;
    font-size: small;
    padding: 5px 15px;
  }
`;
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
