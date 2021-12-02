import React from 'react';
import InterestBox from '../common/InterestBox';
import GreenLabel from '../common/Label';
import styled from 'styled-components';
import FundingGage from '../common/FundingGage';

const FundingCard = ({ projectObj }) => {
    const ms = new Date().getTime() - new Date(projectObj.createdAt).getTime();
    const date = Math.ceil(ms / (1000 * 3600 * 24));
    return (
        <>
            {projectObj === undefined ?
                <Notice>진행중인 프로젝트가 없습니다.</Notice>
                :
                <Wrapper className="col-container">
                    <Title>{projectObj.idea}</Title>
                    <InterestBox interestArr={projectObj.Interests} />
                    <Footer className="row-container">
                        <GreenLabel>펀딩 진행 중</GreenLabel>
                        <span>D-{7 - date}</span>
                        <FundingGage gage={(projectObj.Fundings.length * 500 / 30).toFixed(1)} fundingCnt={projectObj.Fundings.length * 500} width={'180px'}></FundingGage>
                    </Footer>
                </Wrapper>
            }
        </>
    );
};

export default FundingCard;

const Wrapper = styled.div`
    width:100%;
    background-color : white;
    border: 0.5px solid #EBEBEB;
    box-shadow: 5px 5px 10px 5px #00000010;
    border-radius: 15px;
    box-sizing:border-box;
    padding:20px;
`
const Title = styled.span`
    font-size: 17px;
    color : black;
`

const Footer = styled.div`
    gap:10px;
    font-weight : bold;
    &>span{
        color:#37C56E;
        font-size : large;
        flex: 1;
    }
    div{
        font-size:small;
    }
`
const Notice = styled.div`
    width:100%;
    background-color : white;
    border: 0.5px solid #EBEBEB;
    box-shadow: 5px 5px 10px 5px #00000010;
    border-radius: 15px;
    box-sizing:border-box;
    padding:80px 20px;
    text-align: center;
    color: #bdbdbd;
`