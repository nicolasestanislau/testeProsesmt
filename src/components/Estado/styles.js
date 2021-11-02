import styled from "styled-components";

export const Container = styled.div`
  
  background: #ffffff;
  padding: 10px;
  height: 200px;
  width: 250px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  & > h2 {
    color: #1e1e1e;
  }
  & > p {
    border-left: 3px solid #bbbbbb;
    padding-left: 10px;
    max-width: 230px;
    color: #999999;
    font-style: italic;
    align-self: start;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;