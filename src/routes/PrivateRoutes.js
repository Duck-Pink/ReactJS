import React, { useContext } from 'react'
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../context/UserContext'

export default function PrivateRoutes(props) {
  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  if (user && !user.auth) {
    return (<>
      <Alert variant="danger" className='mt-2'>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p className='my-3'>
          You don't have permission to access this route.
        </p>
        <p style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={() => navigate('/login')}>Please log in to access</p>

        <div className='d-flex justify-content-end align-items-center' style={{ cursor: 'pointer' }}>
          <i className="fa-solid fa-angles-left"></i>
          <span onClick={() => navigate('/')}> Go Back</span>
        </div>
      </Alert>
    </>)
  }
  return (
    <>
      {props.children}
    </>
  )
}
