import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addSkill, delSkill } from '../../modules/register';
import { Label } from '../../pages/Register';
import { FieldWrapper } from '../Register/SkillInfo';
import TagList from '../Register/TagList';
import { GreenBorderBtn } from './Button';
import { Flex } from './Flex';

const SkillForm = () => {
  const { skillArr } = useSelector((state) => state.register);
  const dispatch = useDispatch();

  const [skill, setSkill] = useState('');
  const onClickAdd = () => {
    dispatch(addSkill(skill));
    setSkill('');
  };
  const onClickDel = (e) => {
    const {
      target: { name },
    } = e;
    dispatch(delSkill(name));
  };

  return (
    <FieldWrapper skill>
      <Label>기술 스택</Label>
      <Flex className="col" gap="20px">
        <Wrapper dir="row">
          <input
            type="text"
            placeholder="언어|프레임워크|라이브러리"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          />
          <GreenBorderBtn type="button" onClick={skill && onClickAdd}>
            추가
          </GreenBorderBtn>
        </Wrapper>
        <TagList arr={skillArr} onClickDel={onClickDel} />
      </Flex>
    </FieldWrapper>
  );
};
export default SkillForm;
const Wrapper = styled(Flex)`
  & > button {
    margin-left: 5px;
    font-size: small;
    padding: 5px 15px;
  }
`;
