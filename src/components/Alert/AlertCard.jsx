import axios from "axios";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components";
import DateBox from "../common/DateBox";
import ProfileBox from "../common/ProfileBox";
import CompletionCard from "../FundingCompletion/CompletionCard";
import ProgressCard from "../FundingProgress/ProgressCard";

const AlertCard = ({ content, date, projectId, fromUser }) => {
    const [projectObj, setProjectObj] = useState();
    useEffect(() => {
        axios.get(`/project/card/${projectId}`)
            .then(res => { setProjectObj(res.data.project) });
    }, []);

    return (
        <Container className="col-container">
            <Content className="row-container">
                {fromUser ?
                    <><ProfileBox profileUrl={fromUser.ProfileImg?.url} />'{fromUser?.nickName}'{content}</>
                    : content}

                <DateBox dateString={date} side />
            </Content>

            {projectObj &&
                (projectObj.isCompletion ?
                    <CompletionCard projectObj={projectObj} usage={fromUser ? "isAlert" : "isNone"} />
                    :
                    <ProgressCard projectObj={projectObj} usage={fromUser ? "isAlert" : "isNone"} />)}
        </Container>
    )
}
export default AlertCard;

const Container = styled.div`
    width: 100%;
`
const Content = styled.div`
    padding-bottom: 20px;
`