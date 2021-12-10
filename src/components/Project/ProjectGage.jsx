import React from 'react';
import styled from "styled-components";
import LevelImgs from '../../assets/objects/LevelImgs';
import Gage from "../common/Gage";

const ProjectGage = ({gage}) => {
    return (
        <Container className="col-container">
            <ImgBox>
                {LevelImgs.map((img, idx) =>
                    <img src={require("../../assets/imgs/" + `${gage < (idx + 1) * 20 ? img.unFill : img.fill}`).default} width={idx == 4 ? "100px" : "50px"} />)}
            </ImgBox>
            <Gage width={"50%"} gage={gage} />
        </Container>);
}
export default ProjectGage;
const ImgBox = styled.div`
    display: flex;
    padding-left: 9%;
    box-sizing:border-box;
    width: 55%;
    align-items: flex-end;
    gap: 13%;
    margin-bottom: 20px;
`
const Container = styled.div`
    align-items: center;
    padding: 30px 0;
`