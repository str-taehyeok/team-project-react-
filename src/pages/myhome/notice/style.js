import styled from "styled-components";


const S = {}

S.Title = styled.div`
  font-size: 20px;
  line-height: 30px;
  font-weight: bold;
  width: 1000px;
  margin-top: 60px;
  margin-bottom: 20px;
`

S.NoticeBox = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
S.NoticeTitle = styled.div`
  width: 100%;
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 24px;
`
S.NoticeDate = styled.div`
  width: 100%;
  font-size: 14px;
  line-height: 22px;
  color: #828282;
`
S.Notice = styled.div`
  width: 1000px;
  height: 100px;
  padding: 26px 0px;
  border-bottom: 1px solid #D9D9D9;
  cursor: pointer;
`





export default S;