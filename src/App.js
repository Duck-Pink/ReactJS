import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import TableUsers from './components/Table/TableUsers';
import Container from 'react-bootstrap/Container';
import { ToastContainer } from 'react-toastify';
import HomePage from './pages/HomePage';
import FormLogIn from './pages/FormLogIn';


function App() {

  return (
    <>
      <div className="App">
        <Header />
        <Container>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/users' element={<TableUsers />} />
            <Route path='/login' element={<FormLogIn />} />
          </Routes>
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
