import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalConfirm(props) {
  const { show, handleClose, dataUserDelete } = props
  const confirmDelete = () => {

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