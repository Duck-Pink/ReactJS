import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { postCreateUser } from '../../Services/UserService';
// import toast from 'react-toastify'

function ModalAddNewUser(props) {
  const { show, handleClose } = props
  const [name, setName] = useState("")
  const [job, setJob] = useState("")
  const handleSaveUser = async () => {
    let res = await postCreateUser(name, job);
    console.log('check', res)
    if (res && res.id) {
      handleClose()
      setName('')
      setJob('')
      // toast.success('A User is created success')
    } else {

    }
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />

            </div>
            <div className="mb-3">
              <label className="form-label">Job</label>
              <input type="text" className="form-control" value={job} onChange={(e) => setJob(e.target.value)} />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveUser} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAddNewUser;