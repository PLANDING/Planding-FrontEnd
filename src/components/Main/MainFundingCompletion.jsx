import React from 'react';
import styled from 'styled-components';
import CompleteCard from './CompleteCard';

const MainFundingCompletion = ({projectObj}) => {
    return (
        <>
         <Wrapper className="col-container">
             <span>펀딩 완료</span>
             <ProCardWrapper className="row-container">
                <CompleteCard projectObj={projectObj}/>
                <CompleteCard projectObj={projectObj}/>
                <CompleteCard projectObj={projectObj}/>
             </ProCardWrapper>
        </Wrapper>   
        </>
    );
};

export default MainFundingCompletion;

const Wrapper=styled.div`
    background-color: #37C562;
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