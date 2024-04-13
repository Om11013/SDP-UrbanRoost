import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import toast from 'react-hot-toast'
import '../components/admin_dashboard.css'

function AdminDashboard() {
  const [users, setUsers] = useState([])
  const [editableFields, setEditableFields] = useState({})

  useEffect(() => {
    axios
      .get('https://silent-plane-production.up.railway.app/user/getAll')
      .then((response) => {
        if (Array.isArray(response.data)) {
          setUsers(response.data)
        } else {
          console.error('Unexpected response data:', response.data)
        }
      })
      .catch((error) => {
        console.error('Error fetching users: ', error)
      })
  }, [])

  const handleDelete = (id) => {
    axios
      .delete(`https://silent-plane-production.up.railway.app/user/${id}`)
      .then((response) => {
        setUsers(users.filter((user) => user.id !== id))
        toast('User Deleted')
      })
      .catch((error) => {
        console.error('Error deleting user: ', error)
        toast('User Not Deleted')
      })
  }

  const handleEdit = (id) => {
    const editedUser = users.find((user) => user.id === id)
    axios
      .patch(`https://silent-plane-production.up.railway.app/user/${id}`, editedUser)
      .then((response) => {
        toast('User Edited')
        toggleEdit(id)
      })
      .catch((error) => {
        console.error('Error updating user: ', error)
        toast('User Not Edited')
      })
  }

  const toggleEdit = (id) => {
    setEditableFields({ ...editableFields, [id]: !editableFields[id] })
  }

  const handleChange = (e, id, field) => {
    const value = e.target.value
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return { ...user, [field]: value }
      }
      return user
    })
    setUsers(updatedUsers)
  }

  return (
    <>
      <style>
        {`
          body {
            background-color: white;
          }
        `}
      </style>
      <Navbar />
      <div className="admin-dashboard-container">
        <table className="admin-dashboard-table">
          <thead>
            <tr>
              <h1 className="admin-dashboard-table-h2 font-bold">Admin Dashboard</h1>
            </tr>
            <tr>
              <th>Username</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Password</th>
              <th>Role</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  {editableFields[user.id] ? (
                    <input type="text" value={user.username} onChange={(e) => handleChange(e, user.id, 'username')} />
                  ) : (
                    user.username
                  )}
                </td>
                <td>
                  {editableFields[user.id] ? (
                    <input type="text" value={user.contact} onChange={(e) => handleChange(e, user.id, 'contact')} />
                  ) : (
                    user.contact
                  )}
                </td>
                <td>
                  {editableFields[user.id] ? (
                    <input type="text" value={user.email} onChange={(e) => handleChange(e, user.id, 'email')} />
                  ) : (
                    user.email
                  )}
                </td>
                <td>
                  {editableFields[user.id] ? (
                    <input type="text" value={user.password} onChange={(e) => handleChange(e, user.id, 'password')} />
                  ) : (
                    user.password
                  )}
                </td>
                <td>
                  {editableFields[user.id] ? (
                    <input type="text" value={user.role} onChange={(e) => handleChange(e, user.id, 'role')} />
                  ) : (
                    user.role
                  )}
                </td>
                <td>
                  <button
                    onClick={() => {
                      if (editableFields[user.id]) {
                        toggleEdit(user.id)
                        handleEdit(user.id)
                      } else {
                        toggleEdit(user.id)
                      }
                    }}
                  >
                    {editableFields[user.id] ? 'Save' : 'Edit'}
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AdminDashboard
