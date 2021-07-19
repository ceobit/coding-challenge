import styled from 'styled-components';

export const StyledAppFrame = styled.div`
  font-family: sans-serif;
  min-width: 300px;
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 4px 4px 12px 0 rgba(34, 60, 80, 0.2);
  height: 25vh;
  width: 30vw;

  header {
    background-color: #143055;
    color: white;
    padding: 8px 32px;
    border-radius: 3px;
  }

  main {
    padding: 0 36px;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;
