import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { categoryArr } from '../../assets/objects/Category';
import { interestObj } from '../../assets/objects/Interests';
import { setFilterCategory, setFilterInterst, setProjectArr } from '../../modules/fundingProject';
import GreenBtn from './Button';
import { Flex } from './Flex';

const FilterBox = ({ setIsOpen }) => {
  const { entireProjectArr, filterCategoryArr, filterInterstArr } = useSelector(
    (state) => state.fundingProject,
  );
  const dispatch = useDispatch();
  const handleChecked = (e, type) => {
    const { id } = e.target;
    switch (type) {
      case 'category':
        dispatch(setFilterCategory(id));
        break;
      case 'interest':
        dispatch(setFilterInterst(id));
        break;
    }
  };

  const handleFiltering = () => {
    let filteredCategory = entireProjectArr;
    let filteredInterest = entireProjectArr;
    if (filterCategoryArr.length !== 0) {
      filteredCategory = entireProjectArr.filter((p) =>
        filterCategoryArr.includes(p.Category.name),
      );
    }
    if (filterInterstArr.length !== 0) {
      filteredInterest = entireProjectArr.filter((p) =>
        compareArr(
          filterInterstArr,
          p.Interests.map((el) => el.name),
        ),
      );
    }

    dispatch(setProjectArr(filteredCategory.filter((x) => filteredInterest.includes(x))));
    setIsOpen(false);
  };
  const compareArr = (filterArr, arr) => {
    return filterArr.filter((x) => arr.includes(x)).length !== 0;
  };

  return (
    <Container>
      <Flex dir="row" gap="100px">
        <InnerContainer dir="col" gap="5px">
          <Label>주제 카테고리</Label>
          {categoryArr.map((category) => (
            <div key={category}>
              <input
                type="checkbox"
                key={category}
                id={category}
                onChange={(e) => handleChecked(e, 'category')}
                checked={filterCategoryArr.includes(category)}
              />
              <Option for={category} checked={filterCategoryArr.includes(category)}>
                {category}
              </Option>
            </div>
          ))}
        </InnerContainer>
        <InnerContainer dir="col" gap="5px">
          <Label>기술 카테고리</Label>
          <SmallerLabel>기획</SmallerLabel>
          {interestObj.기획.map((category) => (
            <div key={category}>
              <input
                type="checkbox"
                key={category}
                id={category}
                onChange={(e) => handleChecked(e, 'interest')}
                checked={filterInterstArr.includes(category)}
              />
              <Option for={category} checked={filterInterstArr.includes(category)}>
                {category}
              </Option>
            </div>
          ))}
          <SmallerLabel>프론트엔드</SmallerLabel>
          {interestObj.프론트엔드.map((category) => (
            <div key={category}>
              <input
                type="checkbox"
                key={category}
                id={category}
                onChange={(e) => handleChecked(e, 'interest')}
                checked={filterInterstArr.includes(category)}
              />
              <Option for={category} checked={filterInterstArr.includes(category)}>
                {category}
              </Option>
            </div>
          ))}
          <SmallerLabel>백엔드</SmallerLabel>
          {interestObj.백엔드.map((category) => (
            <div key={category}>
              <input
                type="checkbox"
                key={category}
                id={category}
                onChange={(e) => handleChecked(e, 'interest')}
                checked={filterInterstArr.includes(category)}
              />
              <Option for={category} checked={filterInterstArr.includes(category)}>
                {category}
              </Option>
            </div>
          ))}
          <SmallerLabel>데이터</SmallerLabel>
          {interestObj.데이터.map((category) => (
            <div key={category}>
              <input
                type="checkbox"
                key={category}
                id={category}
                onChange={(e) => handleChecked(e, 'interest')}
                checked={filterInterstArr.includes(category)}
              />
              <Option for={category} checked={filterInterstArr.includes(category)}>
                {category}
              </Option>
            </div>
          ))}
        </InnerContainer>
      </Flex>
      <GreenBtn onClick={handleFiltering} animation>
        적용 하기
      </GreenBtn>
    </Container>
  );
};
export default FilterBox;
const Container = styled(Flex)`
  background-color: white;
  width: 500px;
  height: 300px;
  overflow: scroll;
  border-radius: 10px;
  box-shadow: 5px 5px 20px 10px #00000010;
  gap: 100px;
  padding: 30px;
  transform: translate(-23vw, 10vw);
  animation: fadein 0.3s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const InnerContainer = styled(Flex)``;

const Label = styled.h3`
  margin: 0;
  margin-bottom: 10px;
`;

const SmallerLabel = styled.h5`
  margin: 10px 0;
`;
const Option = styled.label`
  font-size: small;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: #37c56e;
  }
  color: ${(props) => props.checked && '#37c56e'};
  font-weight: ${(props) => props.checked && 'bold'};
`;
