import styled from "styled-components";

export const Banner = styled.div`
  display: flex;
  padding: 5px;
  background-color: #4f7a5af5;
  align-items: center;
  flex-direction: column;
  > p {
    font-size: 22px;
    color: lightgray;
    font-weight: bold;
    margin: 10px;
  }
`;

export const LoaderWrapper = styled.div`
  position: fixed;
  right: 50%;
  top: 50%;
`;
export const StyledTextbox = styled.div`
  display: flex;
  margin: 10px 35px;
  width: 95%;
  > input {
    width: 220px;
    height: 60px;
    margin-bottom: 30px;
    padding-left: 8px;
    font-size: 18px;
    flex: 1;
  }
`;

export const StyledRow = styled.div`
  padding: 18px;
  margin: 12px;
  font-size: 14px;
  background-color: whitesmoke;
  border: 1px solid 1px lightgray;
  box-shadow: 0 2px 7px gray;
  > a {
    width: auto;
  }
`;

export const StyledTitle = styled.div`
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 8px;
`;
export const Details = styled.div`
  margin-right: 18px;
  > label {
    color: gray;
    font-weight: bold;
    font-size: 16px;
  }
`;
export const StyledAdditionalInfo = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 20px;
  margin-bottom: 20px;
`;
export const StyledSelect = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-left: 29px;
  > label {
    font-size: 16px;
    font-weight: bold;
  }
  > div {
    width: 25%;
    min-width: 160px;
    margin: 16px;
  }
`;
export const CardsWrapper = styled.div`
  margin: 15px 150px 50px 150px;
  min-width: 480px;
`;
export const PaginationWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  > p {
    margin: 8px 3px;
    text-decoration: underline;
  }
`;
export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 158px 0 135px;
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 15px;
  margin: 10px;
  outline-width: 0px;
  outline-color: white;
  &:focus:hover {
    text-decoration: none;
    border: 0 transparent;
    color: blue;
  }
`;
