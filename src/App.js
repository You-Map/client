import Router from './Router';
import GlobalStyle from './style/GlobalStyle';
import styled from 'styled-components';
import './style/font.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Router />
      </AppContainer>
    </>
  );
}

const AppContainer = styled.div`
  max-width: 1920px;
`;

export default App;
