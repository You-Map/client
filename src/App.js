import Router from './Router';
import GlobalStyle from './style/GlobalStyle';
import styled from 'styled-components';
import './style/font.css';

export const BASE_URL =
  'https://port-0-youmap-3prof2llkumhr4n.sel4.cloudtype.app';

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
