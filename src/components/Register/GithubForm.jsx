import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSkillArr } from '../../modules/register';
import { Label } from '../../pages/Register';
import GreenBtn from '../common/Button';
import { FieldWrapper } from './SkillInfo';

const GithubForm = ({ onChange }) => {
  const { registerInfo } = useSelector((state) => state.register);
  const dispatch = useDispatch();
  const langArr = [];
  const handleClick = async () => {
    const id = registerInfo.github.split('/')[3];
    try {
      const { data } = await axios.get(`https://api.github.com/users/${id}/repos`);
      await data.map(async (data) => {
        await getLanguage(data.languages_url);
        dispatch(setSkillArr([...langArr]));
      });
    } catch (error) {
      alert(error.message);
    }
  };
  const getLanguage = async (repoName) => {
    try {
      const { data } = await axios.get(repoName);
      Object.keys(data).forEach((it) => {
        if (langArr.indexOf(it) == -1) {
          langArr.push(it);
        }
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <FieldWrapper dir="row">
      <Label>Github</Label>
      <input
        type="url"
        name="github"
        value={registerInfo.github}
        placeholder="https://github.com/아이디 주소"
        onChange={onChange}
      />
      <GreenBtn type="button" onClick={handleClick} animation>
        기술 스택 분석
      </GreenBtn>
    </FieldWrapper>
  );
};
export default GithubForm;
