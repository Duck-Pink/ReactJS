import { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import ModalAddNewUser from './components/Modals/ModalAddNewUser';
import TableUsers from './components/Table/TableUsers';
import Container from 'react-bootstrap/Container';
// import { ToastContainer } from 'react-toastify';


function App() {
  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false)
  const handleClose = () => {
    setIsShowModalAddNew(false)
  }
  return (
    <>
      <div className="App">
        <Header />
        <Container>
          <div className="my-3 d-flex align-items-center justify-content-between">
            <strong>List User:</strong>
            <button className='btn btn-primary' onClick={() => setIsShowModalAddNew(true)}>Add New User</button>
          </div>
          <TableUsers />
        </Container>
        <ModalAddNewUser
          show={isShowModalAddNew}
          handleClose={handleClose}
        />
      </div>
      {/* <ToastContainer
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
      Same as
      <ToastContainer /> */}
    </>
  );
}

export default App;
