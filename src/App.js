import Hooks from './components/Hooks';
import AnotherComponent from './components/AnottherComponent';
import Images from './components/Images';
import List from './components/List';
import RenderCond from './components/RenderCond';
import Fragment from './components/Fragment';
import Container from './components/Container';
import './App.css';

function App() {
  return (
    <div>TESTE
      <AnotherComponent />
      <Images />
      <Hooks/>
      <List/>
      <RenderCond x = {7} y ={1}/>
      <Fragment/>
      <Container>
        <h1>Esse é filho do container!</h1>
      </Container>
    </div>
  );
}

export default App;
