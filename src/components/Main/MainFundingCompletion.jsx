import React from 'react';
import styled from 'styled-components';
import MainProjectCard from './MainProjectCard';

const MainFundingCompletion = ({projectObj, bgcolor}) => {
    return (
        <>
         <Wrapper className="col-container" bgcolor={bgcolor}>
             <span>펀딩 완료</span>
             <ProCardWrapper className="row-container">
                <MainProjectCard projectObj={projectObj}/>
                <MainProjectCard projectObj={projectObj}/>
                <MainProjectCard projectObj={projectObj}/>
             </ProCardWrapper>
        </Wrapper>   
        </>
    );
};

export default MainFundingCompletion;

const Wrapper=styled.div`
    background-color: ${props => props.bgcolor};
    box-shadow: 5px 5px 20px 2px #00000015;
    width: 100%;
    border-radius: 15px;
    padding:30px;
    box-sizing: border-box;
    gap:10px;
    &>span{
        color:white;
        font-size:20px;
        font-weight : bold;
    }
`

const ProCardWrapper = styled.div`
    display:flex;
    justify-content: space-around;
    margin-top: 10px;
`