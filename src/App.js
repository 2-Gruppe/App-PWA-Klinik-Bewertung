import './App.css';
import { Container } from 'reactstrap';
import HeaderComponent from './components/HeaderComponent'
import JumbotronComponent from './components/JumbotronComponent'
import Kommentare from './components/Kommentare'
import FooterComponent from './components/FooterComponent'

function App() {
  return (
    <Container fluid={true}>
      <HeaderComponent />
      <JumbotronComponent />
      <Kommentare />
      <FooterComponent />
    </Container>
  );
}

export default App;
