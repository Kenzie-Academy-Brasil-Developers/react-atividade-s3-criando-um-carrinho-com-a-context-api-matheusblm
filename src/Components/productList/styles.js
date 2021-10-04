import styled from "styled-components";

export const Container = styled.div`
  background-color: #b0c4b1;
  width: 100%;
  max-width: 500px;
  height: 50vh;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px;
  align-self: center;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #4a5759;
  width: 80%;
  height: 50%;
  max-width: 300px;
  padding: 20px;
  margin: 10px;
  border-radius: 20px;

  li {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
  }
`;
