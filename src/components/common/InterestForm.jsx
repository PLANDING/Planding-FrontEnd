import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { interestObj } from '../../assets/objects/Interests';
import { addInterest, delInterest } from '../../modules/register';
import { Label } from '../../pages/Register';
import { FieldWrapper } from '../Register/SkillInfo';
import TagList from '../Register/TagList';
import { GreenBorderBtn } from './Button';
import Select from './Select';

const InterestForm = () => {
  const { interestArr } = useSelector((state) => state.register);
  const dispatch = useDispatch();

  const [first, setFirst] = useState(''); //분야
  const [second, setSecond] = useState(''); //소분야
  /* 추가 btn */
  const onClickAdd = () => {
    !interestArr.includes(first + ':' + second) && dispatch(addInterest(`${first}:` + second));
  };
  /*interest block 삭제 */
  const onClickDel = (e) => {
    const {
      target: { name },
    } = e;
    dispatch(delInterest(name));
  };
  return (
    <FieldWrapper className="col-container">
      <Label>관심 분야</Label>
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
        <GreenBorderBtn type="button" onClick={second && onClickAdd}>
          추가
        </GreenBorderBtn>
      </div>
      <TagList arr={interestArr} onClickDel={onClickDel} isInterest />
    </FieldWrapper>
  );
};
export default InterestForm;
