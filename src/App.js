import './App.scss';
import Header from './components/Header/Header';
import TableUsers from './components/Table/TableUsers';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <TableUsers />
      </Container>
    </div>
  );
}

export default App;
