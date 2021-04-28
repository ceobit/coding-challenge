import styled from 'styled-components';

export const StyledAppFrame = styled.div`
  font-family: sans-serif;
  min-width: 300px;
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
