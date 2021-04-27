import styled from 'styled-components';

import { ReactComponent as Logo } from './logo.svg';
import { Task } from './Task';

const StyledApp = styled.div`
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

export function App() {
  return (
    <StyledApp>
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to the client !</h1>
      </header>
      <main>
        <h1>Hi there!</h1>

        <p>
          Your task is quite easy to implement: You're going to build a currency
          converter
        </p>

        <img
          alt="tada"
          src="https://a.slack-edge.com/production-standard-emoji-assets/13.0/google-large/1f389@2x.png"
        />

        <Task />
      </main>
    </StyledApp>
  );
}

export default App;
