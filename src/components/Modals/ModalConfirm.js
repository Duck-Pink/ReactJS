import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../../Services/UserService';
import { toast } from 'react-toastify';


function ModalConfirm(props) {
  const { show, handleClose, dataUserDelete, handleDeleteUserFromModal } = props
  const confirmDelete = async () => {
    let res = await deleteUser(dataUserDelete.id)
    if (res && +res.statusCode === 204) {
      toast.success("Delete User Success")
      handleClose()
      handleDeleteUserFromModal(dataUserDelete)
    } else {
      toast.error("Error Delete User")
    }

  }
  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete An User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="confirm">
            This action can't be undone! Do want to delete this user?
            <br />
            <strong>email : {dataUserDelete.email}</strong>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() => confirmDelete()} >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalConfirm;