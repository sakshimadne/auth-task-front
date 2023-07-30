import React from 'react'
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from 'mdb-react-ui-kit'

export default function Table() {
  const users = [
    {
      avatar: 'https://mdbootstrap.com/img/new/avatars/8.jpg',
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      jobTitle: 'Software engineer',
      department: 'IT department',
      status: 'Active',
      badgeColor: 'success',
      position: 'Senior',
    },
    {
      avatar: 'https://mdbootstrap.com/img/new/avatars/6.jpg',
      name: 'Alex Ray',
      email: 'alex.ray@gmail.com',
      jobTitle: 'Consultant',
      department: 'Finance',
      status: 'Onboarding',
      badgeColor: 'primary',
      position: 'Junior',
    },
    {
      avatar: 'https://mdbootstrap.com/img/new/avatars/7.jpg',
      name: 'Kate Hunington',
      email: 'kate.hunington@gmail.com',
      jobTitle: 'Designer',
      department: 'UI/UX',
      status: 'Awaiting',
      badgeColor: 'warning',
      position: 'Senior',
    },
  ]

  return (
    <div className='container w-75 m-auto'>
      <MDBTable align='middle'>
        <MDBTableHead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Title</th>
            <th scope='col'>Status</th>
            <th scope='col'>Position</th>
            <th scope='col'>Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src={user.avatar}
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                  />
                  <div className='ms-3'>
                    <p className='fw-bold mb-1'>{user.name}</p>
                    <p className='text-muted mb-0'>{user.email}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className='fw-normal mb-1'>{user.jobTitle}</p>
                <p className='text-muted mb-0'>{user.department}</p>
              </td>
              <td>
                <MDBBadge color={user.badgeColor} pill>
                  {user.status}
                </MDBBadge>
              </td>
              <td>{user.position}</td>
              <td>
                <MDBBtn color='link' rounded size='sm'>
                  Edit
                </MDBBtn>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  )
}
