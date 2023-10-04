import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { putUpdateUser } from '../../Services/UserService';

export default function ModalEditUser(props) {
  const { show, handleClose, dataUserEdit, handleEditUserFromModal } = props
  const [name, setName] = useState("")
  const [job, setJob] = useState("")

  const handleEditUser = async () => {
    let res = await putUpdateUser(name, job)
    // console.log(name, job)
    if (res && res.updatedAt) {
      handleEditUserFromModal({ first_name: name, id: dataUserEdit.id })
      handleClose();
      toast.success('Update User Success')
    }
  }

  useEffect(() => {
    if (show) {
      setName(dataUserEdit.first_name)
    }
  }, [dataUserEdit])

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit An User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Job</label>
              <input
                type="text"
                className="form-control"
                value={job}
                onChange={(e) => setJob(e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleEditUser()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
