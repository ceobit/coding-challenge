import styled from 'styled-components';

export const StyledConverter = styled.div`
  .title {
    margin: 0;
    padding: 5% 0;
    font-size: 20px;
    color: #797878;
    text-align: center;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .input {
    border: none;
    border-bottom: 2px solid #17b6ec;
    padding: 10% 20% 0 0;
    font-size: 22px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .button {
    margin-top: 3%;
    padding: 3% 0;
    background-color: #1c8efd;
    border: none;
    color: white;
  }

  .result {
    font-size: 22px;
  }

  .error {
    font-size: 12px;
    color: palevioletred;
    margin: 0;
    padding: 0;
  }
`;
