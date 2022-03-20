import styled from 'styled-components';
import GreenLabel, { GreenBorderLabel } from '../common/Label';

const TagList = ({ arr, onClickDel, isInterest }) => {
  return (
    <>
      {arr.length > 0 && (
        <TagWrapper>
          {arr.map((ele, idx) =>
            isInterest ? (
              <GreenBorderLabel key={idx}>
                {ele.split(':')[1]}
                <button type="button" name={idx} id="del-btn" onClick={onClickDel}>
                  X
                </button>
              </GreenBorderLabel>
            ) : (
              <GreenLabel key={idx}>
                {ele}
                <button type="button" name={idx} id="del-btn" onClick={onClickDel}>
                  X
                </button>
              </GreenLabel>
            ),
          )}
        </TagWrapper>
      )}
    </>
  );
};
export default TagList;
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
