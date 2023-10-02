import './App.scss';
import Header from './components/Header/Header';
import TableUsers from './components/Table/TableUsers';
import Container from 'react-bootstrap/Container';
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <>
      <div className="App">
        <Header />
        <Container>
          <TableUsers />
        </Container>

      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
