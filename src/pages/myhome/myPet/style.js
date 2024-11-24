import styled from "styled-components";

const S = {}

S.Mydog = styled.div`
  display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
`
S.PetCard = styled.div`
  width: 270px;
	height: 430px;
	background-color: white;
	border: 1px solid #ccc;
	border-radius: 15px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	display: flex;
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
  padding-top: 30px;
`
S.PetKind = styled.label`
  display: block;
  padding-top: 30px;
`
S.PetGender = styled.label`
  display: block;
  padding-top: 30px;
`
S.PetBreed = styled.label`
  display: block;
  padding-top: 30px;
`
S.PetBrith = styled.label`
  display: block;
  padding-top: 30px;
`
S.PetBreed = styled.label`
  display: block;
  padding-top: 30px;
`

export default S;