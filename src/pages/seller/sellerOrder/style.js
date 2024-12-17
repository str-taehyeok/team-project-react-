import styled from "styled-components";

const S = {}

S.Container = styled.div`
  display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

S.Title = styled.div`
  margin: 43px 0 80px 0;
  display: flex;
  justify-content: space-between;
  width: 1191px;

  & h1 {
    font-size: 40px;
    font-weight: bold;
  }
`;

// Dropdown
S.Dropdown = styled.img`
  width: 20px;
  height: 20px;
`;

// New Add Button
S.NewAddButton = styled.button`
  width: 120px;
  height: 30px;
  border: none;
  border-radius: 20px;
  color: white; 
  cursor: pointer;
  background-color: #113F8A; 
  position: absolute;
  left: 1082px;
  top: 134px;
`;

S.NoticeSearch = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1440px;
`;

// Search Bar
S.SearchBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  & label {
    margin-right: 10px;
    font-weight: bold;
  }

  & input {
    width: 708px;
    height: 60px;
    border-radius: 20px;
    padding: 17px;
    border: 1px solid #ddd;
  }
`;

// Search Buttons
S.SearchButtons = styled.div`
  display: flex;
  margin: 35px 0 80px 0;
  gap: 10px;
`;

S.SearchButton = styled.button`
  width: 90px;
  height: 30px;
  border: none;
  border-radius: 20px;
  color: #fff; 
  cursor: pointer;
  background-color: #113F8A;
`;

S.ResetButton = styled.button`
  width: 90px;
  height: 30px;
  border: solid 1px #888888;
  border-radius: 20px;
  color: #888888; 
  cursor: pointer;
  background-color: #fff;
`;

// Notice List
S.NoticeList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 1440px;
  margin: 0 auto;
`;

// Table Styles
S.Table = styled.table`
  width: 1440px;
  text-align: center;

  & tr {
    display: flex;

    & th, & td {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px 0;
    }

    & th {
      border-bottom: solid 0.1px #828282;
      padding-bottom: 28px;
    }
  }

  & th:nth-child(1), & td:nth-child(1) { width: 122px; }
  & th:nth-child(2), & td:nth-child(2) { width: 122px; }
  & th:nth-child(3), & td:nth-child(3) { width: 366px; }
  & th:nth-child(4), & td:nth-child(4) { width: 122px; }
  & th:nth-child(5), & td:nth-child(5) { width: 122px; }
  & th:nth-child(6), & td:nth-child(6) { width: 122px; }
  & th:nth-child(7), & td:nth-child(7) { width: 122px; }
  & th:nth-child(8), & td:nth-child(8) { width: 200px; }
  & th:nth-child(9), & td:nth-child(9) { width: 98px; }
`;
S.Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`


S.DetailsButton = styled.button`
  width: 53px;
  height: 30px;
  border: solid 1px #888888;
  color: #828282;
  background-color: #fff;
  border-radius: 20px;
  cursor: pointer;  
    &:nth-child(2) {
      background-color: #888888;
      color: white;
      border: none;
  }
`;

// Form Frame
S.FormFrame = styled.div`
  display: none;
  flex-direction: column;
  width: 950px;
  border: solid 0.5px #828282;
  border-radius: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: lift-popup 0.1s;
  z-index: 100;
`;

// Popup Background
S.PopupBackground = styled.div`
  display: none;
  z-index: 99;
  position: fixed;
  left: 0;
  top: 0;
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.5);
`;

// Dropdown Content
S.DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 150px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  z-index: 1000;

  & p {
    padding: 12px 16px;
    margin: 0;
    color: #333;
    cursor: pointer;

    &:hover {
      background-color: #f1f1f1;
    }
  }
`;

S.Search = styled.input`
    width: 708px;
    height: 60px;
    border-radius: 20px;
    padding: 17px;
`;

// Menu Icon
S.MenuIcon = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
`;


export default S;