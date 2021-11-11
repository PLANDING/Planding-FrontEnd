import { useEffect } from "react";
import { useHistory } from "react-router";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";

const AlertModal = () => {
    const history = useHistory();
    /*dummy data */
    const arr = [{ content: "‘happy’님이 플랜딩의 추천시스템을 통해 당신에게 개발 협업을 요청했습니다." },
    { content: "‘이미지 인식을 활용한 앱서비스’ 프로젝트 펀딩이 마감되었습니다." }];

    const [alertArr, setAlertArr] = useState([]);
    useEffect(() => {
        setAlertArr(arr);
    }, [])
    const onClickDetail = () => {
        history.push("/alert");
    }
    return (
        <Container className="col-container">
            <Wrapper>
                {alertArr.map(alert => <Box>{alert.content}</Box>)}
            </Wrapper>
            <Button onClick={onClickDetail}>자세히 보기</Button>
        </Container>
    )
}
export default AlertModal;
const Container = styled.div`
    border: solid thin #37C56E;
    border-radius: 10px;
    position: absolute;
    background-color: white;
    transform: translate(-50%,10%);
    width: 300px; 
    min-height: 300px;
`
const Wrapper = styled.div`
    flex: 1;
`
const Box = styled.div`
    font-size: small;
    margin: 15px;
    border-bottom: solid thin #bdbdbd;
    padding-bottom: 10px;
`
const Button = styled.button`
    background-color: #37C56E;
    width: 100%;
    text-align: center;
    color: white;
    border-radius: 0 0 8px 8px;
    padding: 5px 0;
    font-size: small;
`