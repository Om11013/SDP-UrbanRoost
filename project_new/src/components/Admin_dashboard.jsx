import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import toast from 'react-hot-toast';

function AdminDashboard() { // Renamed the component to AdminDashboard
  const [users, setUsers] = useState([]); // Changed 'appointments' to 'users' for better clarity
  const [editableFields, setEditableFields] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8080/user/getAll")
      .then(response => {
        if (Array.isArray(response.data)) {
          setUsers(response.data);
        } else {
          console.error('Unexpected response data:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching users: ', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/user/${id}`) // Updated the endpoint to delete a user
      .then(response => {
        setUsers(users.filter(user => user.id !== id)); // Updated 'appointments' to 'users'
        toast("User Deleted"); // Updated toast message
        
      })
      .catch(error => {
        console.error('Error deleting user: ', error); // Updated error message
        toast("User Not Deleted"); // Updated toast message
      });
  };

  const handleEdit = (id) => {
    const editedUser = users.find(user => user.id === id); // Updated 'appointments' to 'users'
    axios.patch(`http://localhost:8080/user/${id}`, editedUser) // Updated the endpoint to edit a user
      .then(response => {
        toast("User Edited"); // Updated toast message
        toggleEdit(id); // Toggle back to view mode after successful edit
      })
      .catch(error => {
        console.error('Error updating user: ', error); // Updated error message
        toast("User Not Edited"); // Updated toast message
      });
  };

  const toggleEdit = (id) => {
    setEditableFields({ ...editableFields, [id]: !editableFields[id] });
  };

  const handleChange = (e, id, field) => {
    const value = e.target.value;
    const updatedUsers = users.map(user => {
      if (user.id === id) {
        return { ...user, [field]: value };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

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
              <h2 className="admin-dashboard-table-h2">Users</h2>
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
            {users.map(user => (
              <tr key={user.id}>
                <td>{editableFields[user.id] ?
                  <input type="text" value={user.username} onChange={e => handleChange(e, user.id, 'username')} />
                  : user.username}</td>
                <td>{editableFields[user.id] ?
                  <input type="text" value={user.contact} onChange={e => handleChange(e, user.id, 'contact')} />
                  : user.contact}</td>
                <td>{editableFields[user.id] ?
                  <input type="text" value={user.email} onChange={e => handleChange(e, user.id, 'email')} />
                  : user.email}</td>
                <td>{editableFields[user.id] ?
                  <input type="text" value={user.password} onChange={e => handleChange(e, user.id, 'password')} />
                  : user.password}</td>
                <td>{editableFields[user.id] ?
                  <input type="text" value={user.role} onChange={e => handleChange(e, user.id, 'role')} />
                  : user.role}</td>
                <td>
                  <button onClick={() => {
                    if (editableFields[user.id]) {
                      toggleEdit(user.id);
                      handleEdit(user.id);
                    } else {
                      toggleEdit(user.id);
                    }
                  }}>{editableFields[user.id] ? 'Save' : 'Edit'}</button>
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
  );
}

export default AdminDashboard; // Updated component name to AdminDashboard