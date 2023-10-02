// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../../Services/UserService';
import ReactPaginate from 'react-paginate';
import ModalAddNewUser from '../Modals/ModalAddNewUser'
import ModalEditUser from '../Modals/ModalEditUser';
import ModalConfirm from '../Modals/ModalConfirm';
import _ from 'lodash'

export default function TableUsers() {

  const [listUsers, setListUsers] = useState([])
  const [dataUserEdit, setDataUserEdit] = useState({})
  const [totalLists, setTotalLists] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false)
  const [isShowModalEdit, setIsShowModalEdit] = useState(false)
  const [dataUserDelete, setDataUserDelete] = useState({})
  const [isShowModalDelete, setIsShowModalDelete] = useState(false)


  const handleClose = () => {
    setIsShowModalAddNew(false)
    setIsShowModalEdit(false)
    setIsShowModalDelete(false)
  }

  useEffect(() => {
    getUsers(1)
  }, [])

  const getUsers = async (page) => {
    let res = await fetchAllUser(page);
    if (res && res.data) {
      setTotalLists(res.total)
      setListUsers(res.data)
      setTotalPages(res.total_pages)
    }
  }

  const handlePageClick = (event) => {
    getUsers(+event.selected + 1);
  }

  const handleUpdateUser = (user) => {
    setListUsers([user, ...listUsers])
  }

  const handleEditUser = (user) => {
    setDataUserEdit(user)
    setIsShowModalEdit(true)
  }

  const handleEditUserFromModal = (user) => {
    let cloneListUser = [...listUsers]
    let index = listUsers.findIndex(item => item.id === user.id)
    cloneListUser[index].first_name = user.first_name;
    setListUsers(cloneListUser)
  }

  const handleDeleteUser = (user) => {
    setIsShowModalDelete(true);
    setDataUserDelete(user)
  }

  return (
    <>
      <div className="my-3 d-flex align-items-center justify-content-between">
        <strong>List User:</strong>
        <button className='btn btn-primary' onClick={() => setIsShowModalAddNew(true)}>Add New User</button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
            return (
              <tr key={`user-${index}`}>
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>
                  <button
                    className='btn btn-warning mx-3'
                    onClick={() => handleEditUser(item)}
                  >
                    Edit
                  </button>
                  <button
                    className='btn btn-danger'
                    onClick={() => handleDeleteUser(item)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={totalPages}
        previousLabel="< previous"
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        containerClassName='pagination'
        activeClassName='active'
      />
      <ModalAddNewUser
        show={isShowModalAddNew}
        handleClose={handleClose}
        handleUpdateUser={handleUpdateUser}
      />
      <ModalEditUser
        show={isShowModalEdit}
        handleClose={handleClose}
        handleEditUserFromModal={handleEditUserFromModal}
        dataUserEdit={dataUserEdit}
      />
      <ModalConfirm
        show={isShowModalDelete}
        handleClose={handleClose}
        dataUserDelete={dataUserDelete}
      />
    </>
  )
}


