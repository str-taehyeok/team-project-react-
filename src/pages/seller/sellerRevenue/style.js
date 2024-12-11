import styled from "styled-components";

const S = {};

S.Frame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 100px;
`;

S.DivisionLine = styled.div`
    border: solid 0.1px #828282;
    width: 1440px;
`;

S.Title = styled.div`
    margin: 43px 0 80px 0;
    display: flex;
    justify-content: space-between;
    width: 1191px;

    h1 {
        font-size: 40px;
        font-weight: bold;
    }
`;

S.NoticeSearch = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1440px;

    .input-group {
        display: flex;
        align-items: center;
        gap: 6px;

        input[type="text"],
        input[type="date"],
        select {
            width: 342px;
            height: 48px;
            padding: 17px;
            border-radius: 20px;
            border: 1px solid #ccc;
        }

        font-size: 20px;
    }

    .buttons {
        display: flex;
        margin: 35px 0 80px 0;
        gap: 10px;

        .search-btn {
            width: 90px;
            height: 30px;
            border: none;
            border-radius: 20px;
            color: #fff;
            cursor: pointer;
            background-color: #113f8a;
        }

        .reset-btn {
            width: 90px;
            height: 30px;
            border: solid 1px #888888;
            border-radius: 20px;
            color: #888888;
            cursor: pointer;
            background-color: #fff;
        }
    }
`;

S.NoticeList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 1440px;
    margin: 0 auto;

    table {
        width: 1440px;
        text-align: center;
        border-collapse: collapse;
    }
`;

S.Table = styled.table``;

S.TableHeader = styled.thead``;

S.TableRow = styled.tr`
  display: flex;
  justify-content: space-between;

  &.tr-border {
    border-top: solid 0.1px #828282;
    height: 70px;

    td:first-child {
      font-weight: bold;
    }
  }
`;

S.TableHeaderCell = styled.th`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 35px 0;
`;

S.TableCell = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 35px 0;
`;

S.TableFooter = styled.tr`
  font-weight: bold;
`;

S.Button = styled.button`
  width: 90px;
  height: 30px;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &.search-btn {
    background-color: #113f8a;
    color: #fff;
  }

  &.reset-btn {
    background-color: #fff;
    border: solid 1px #888888;
    color: #888888;
  }
`;

S.DateInput = styled.input`
  width: 342px;
  height: 48px;
  padding: 17px;
  border-radius: 20px;
  border: 1px solid #ccc;
`;

S.Span = styled.span`
  font-size: 20px;
  margin: 0 10px;
`;

export default S;