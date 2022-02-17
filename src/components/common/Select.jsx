import styled from 'styled-components';
import arrowImg from '../../assets/imgs/arrow.png';
const Select = ({ label, value, optionArr, setValue }) => {
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };
  return (
    <Wrapper className="row-container">
      <SelectBox value={value} onChange={onChange}>
        <option value="defalut" selected hidden>
          {label}
        </option>
        {optionArr.map((opt, idx) => (
          <option key={idx} value={opt}>
            {opt}
          </option>
        ))}
      </SelectBox>
      <Button type="button" id="sel-arrow">
        <img src={arrowImg} />
      </Button>
    </Wrapper>
  );
};
export default Select;
const Wrapper = styled.div``;
const SelectBox = styled.select`
  appearance: none;
  padding: 5px 10px;
  padding-right: 40px;
  border: solid thin #bcbcbc;
  border-radius: 5px;
  min-width: 100px;
  color: #bcbcbc;
  background-color: transparent;
  cursor: pointer;
`;
const Button = styled.button`
  z-index: -10;
  img {
    width: 15px;
    transform: translate(-160%);
  }
`;
