import { ReactComponent as Logo } from './logo.svg';
import { Task } from './Task';
import { FC } from 'react';
import { StyledAppFrame } from './StyledAppFrame';
import Converter from "./Converter/Converter";

export const App: FC = () => {
  return (
    <StyledAppFrame>
      {/*<header className="flex">*/}
      {/*  <Logo width="75" height="75" />*/}
      {/*  <h1>Welcome to the client !</h1>*/}
      {/*</header>*/}

      <main>
        {/*<Task />*/}
      </main>

      {/* YOUR CODE HERE */}

      <Converter/>



    </StyledAppFrame>
  );
}

export default App;
