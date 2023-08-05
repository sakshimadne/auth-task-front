import React from 'react'
import './Table.css'

export default function Table() {
  return (
    <div className='container w-75 m-auto'>
      <table className='table table-striped table-hover'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Date Created</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <a href='#'>
                <img
                  src='https://www.tutorialrepublic.com/examples/images/avatar/1.jpg'
                  className='avatar'
                  alt='Avatar'
                />
                Michael Holz
              </a>
            </td>
            <td>04/10/2013</td>
            <td>Admin</td>
            <td>
              <span className='status text-success'>•</span> Active
            </td>
            <td>
              <a
                href='#'
                className='settings'
                title='Settings'
                data-toggle='tooltip'
              >
                <i className='material-icons'></i>
              </a>
              <a
                href='#'
                className='delete'
                title='Delete'
                data-toggle='tooltip'
              >
                <i className='material-icons'></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <a href='#'>
                <img
                  src='https://www.tutorialrepublic.com/examples/images/avatar/2.jpg'
                  className='avatar'
                  alt='Avatar'
                />{' '}
                Paula Wilson
              </a>
            </td>
            <td>05/08/2014</td>
            <td>Publisher</td>
            <td>
              <span className='status text-success'>•</span> Active
            </td>
            <td>
              <a
                href='#'
                className='settings'
                title='Settings'
                data-toggle='tooltip'
              >
                <i className='material-icons'></i>
              </a>
              <a
                href='#'
                className='delete'
                title='Delete'
                data-toggle='tooltip'
              >
                <i className='material-icons'></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <a href='#'>
                <img
                  src='https://www.tutorialrepublic.com/examples/images/avatar/3.jpg'
                  className='avatar'
                  alt='Avatar'
                />{' '}
                Antonio Moreno
              </a>
            </td>
            <td>11/05/2015</td>
            <td>Publisher</td>
            <td>
              <span className='status text-danger'>•</span> Suspended
            </td>
            <td>
              <a
                href='#'
                className='settings'
                title='Settings'
                data-toggle='tooltip'
              >
                <i className='material-icons'></i>
              </a>
              <a
                href='#'
                className='delete'
                title='Delete'
                data-toggle='tooltip'
              >
                <i className='material-icons'></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <a href='#'>
                <img
                  src='https://www.tutorialrepublic.com/examples/images/avatar/4.jpg'
                  className='avatar'
                  alt='Avatar'
                />{' '}
                Mary Saveley
              </a>
            </td>
            <td>06/09/2016</td>
            <td>Reviewer</td>
            <td>
              <span className='status text-success'>•</span> Active
            </td>
            <td>
              <a
                href='#'
                className='settings'
                title='Settings'
                data-toggle='tooltip'
              >
                <i className='material-icons'></i>
              </a>
              <a
                href='#'
                className='delete'
                title='Delete'
                data-toggle='tooltip'
              >
                <i className='material-icons'></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <a href='#'>
                <img
                  src='https://www.tutorialrepublic.com/examples/images/avatar/5.jpg'
                  className='avatar'
                  alt='Avatar'
                />{' '}
                Martin Sommer
              </a>
            </td>
            <td>12/08/2017</td>
            <td>Moderator</td>
            <td>
              <span className='status text-warning'>•</span> Inactive
            </td>
            <td>
              <a
                href='#'
                className='settings'
                title='Settings'
                data-toggle='tooltip'
              >
                <i className='material-icons'></i>
              </a>
              <a
                href='#'
                className='delete'
                title='Delete'
                data-toggle='tooltip'
              >
                <i className='material-icons'></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
