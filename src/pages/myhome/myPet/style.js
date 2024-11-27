import styled from "styled-components";
import { h9Medium } from '../../../global/common'

const S = {}

S.Mydog = styled.div`
  display: flex;
	flex-direction: row;
	align-items: start;
	justify-content: center;
	margin: 0 auto;
`
S.Petanimal = styled.h1`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 2em;
  margin-left: 256px;
  height: 190px;
`
S.PetCard = styled.div`
  width: 270px;
  height: 430px;
  background-color: white;
  border: solid 1px;
  border-radius: 15px;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  margin-bottom: 432px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
S.Profilepic = styled.div`
  border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
`
S.Name = styled.div`
  font-weight: bold;
	margin-bottom: 20px;
`
S.EditButton = styled.label`
  background-color: #1c4da0;
	color: white;
	border: none;
	border-radius: 20px;
	cursor: pointer;
	width: 96px;
	height: 32px;
	padding-top: 5px;
	padding-left: 11px;
`
S.Title = styled.h5`
	margin-left: 60px;
	font-weight: bold;
`
S.PetName = styled.label`
  display: block;
  label {
  display: block;
  width: 58px;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: bold;
    }

`
S.PetKind = styled.label`
  display: block;
`
S.PetGender = styled.label`
  display: block;
`
S.PetBreed = styled.label`
  display: block;
`
S.PetBrith = styled.label`
  display: block;
`
S.PetBreed = styled.label`
  display: block;
`
S.PetNeuter = styled.label`
  display: block;
`
S.PetVet = styled.label`
  display: block;
`
S.InputWarp = styled.div`
  margin-top: 30px;
  margin-left: 58px;

  &input{
  border-radius: 20px;
	height: 30px;
	padding-left: 26px;
	margin-top: 20px;
  }
`
S.InputGroup = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  justify-content: space-between;
  margin-bottom: 21px;


  input {
  width: 285px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  }
`;
S.InputGroup2 = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  justify-content: space-between;
  margin-bottom: 21px;


  input {
  width: 285px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
    }
`;
S.InputGroup3 = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  justify-content: space-between;
  margin-bottom: 21px;


  input {
  width: 285px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
    }
`;
S.InputGroup4 = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 400px;
  justify-content: space-between;
  margin-bottom: 21px;


  input {
  width: 285px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
    }
`;

S.InputGroup5 = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  justify-content: space-between;
  margin-bottom: 23px;


  input {
  width: 285px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
    }
`

S.RadioGroup = styled.div`
  display: flex;
  margin-bottom: 21px;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  width: 267px;
  height: 32px;
`;
S.RadioGroupGender2 = styled.div`
  display: flex;
  margin-bottom: 21px;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  width: 275px;
  height: 32px;
`;

S.RadioGroupGender = styled.div`
  display: flex;
  margin-bottom: 21px;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  width: 238px;
  height: 32px;
`;
S.PetDogCat = styled.div`
  display: flex;
  gap: 20px;
  font-weight: lighter;
  justify-content: space-between;

`
S.Gap = styled.div`
  display: flex;
`

S.PetGender = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  width: 30px;
  height: 32px;
`;
S.Kg = styled.text`
  position: absolute;
  right: 31px;
  top: 7px;
`
S.Description = styled.h6`
  ${h9Medium};
` 
S.Button = styled.button`
  display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 67px;
	width: 89px;
	height: 42px;
	background-color: #1c4da0;
	border-radius: 20px;
	color: white;
	margin-left: 910px;
`



export default S;