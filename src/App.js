import styled from 'styled-components';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';

const App = () => {
  return (
    <AppStyled>
      <Sidebar/>
      <Main />
    </AppStyled>
  );
}


const AppStyled = styled.div`

`;
export default App;
