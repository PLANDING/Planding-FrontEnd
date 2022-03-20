import styled from 'styled-components';
import { interestObj } from '../../assets/objects/Interests';

const FilterBox = () => {
  /* export 예정 */
  const categoryArr = [
    '공유서비스',
    '여행',
    '소셜네트워크',
    '뷰티/패션',
    '이커머스',
    '엔터테인먼트/게임',
    '헬스/스포츠',
    '뉴스/정보',
    '금융',
    '부동산/인테리어',
    '교육',
    '라이프',
  ];
  return (
    <Container>
      <InnerContainer>
        <Label>주제 카테고리</Label>
        {categoryArr.map((category) => (
          <div key={category}>
            <input type="checkbox" key={category} />
            <span>{category}</span>
          </div>
        ))}
      </InnerContainer>
      <InnerContainer>
        <Label>기술 카테고리</Label>
        <SmallerLabel>기획</SmallerLabel>
        {interestObj.기획.map((category) => (
          <div key={category}>
            <input type="checkbox" key={category} />
            <span>{category}</span>
          </div>
        ))}
        <SmallerLabel>프론트엔드</SmallerLabel>
        {interestObj.프론트엔드.map((category) => (
          <div key={category}>
            <input type="checkbox" key={category} />
            <span>{category}</span>
          </div>
        ))}
        <SmallerLabel>백엔드</SmallerLabel>
        {interestObj.백엔드.map((category) => (
          <div key={category}>
            <input type="checkbox" key={category} />
            <span>{category}</span>
          </div>
        ))}
      </InnerContainer>
    </Container>
  );
};
export default FilterBox;
const Container = styled.div`
  width: 80%;
  display: flex;
  background-color: white;
  width: 500px;
  height: 300px;
  overflow: scroll;
  border-radius: 10px;
  box-shadow: 5px 5px 20px 10px #00000010;
  gap: 100px;
  padding: 20px;
  transform: translate(-23vw, 10vw);
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.h3`
  margin: 0;
`;

const SmallerLabel = styled.h5`
  margin: 10px 0;
`;
