import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import GlobalStyle from './style/GlobalStyle';
import styled from 'styled-components';
import './style/font.css';

export const BASE_URL = process.env.REACT_APP_BASE_URL;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <BrowserRouter children={<Router />} />
      </AppContainer>
    </>
  );
}

const AppContainer = styled.div`
  max-width: 1512px;
  max-height: 982px;
`;

export default App;
