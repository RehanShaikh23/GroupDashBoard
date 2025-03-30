import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

function Dashboard({ groups, onAddClick, onEditClick, onDeleteClick }) {
  return (
    <div className="content-view">
      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Groups</h3>
          <p>{groups.length}</p>
        </div>
      </div>
      <div className="action-bar">
        <button className="btn btn-primary" onClick={onAddClick}>
          Add Group
        </button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>S/No</th>
              <th>Group Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {groups.length > 0 ? (
              groups.map((group, index) => (
                <tr key={group.id}>
                  <td>{index + 1}</td>
                  <td>{group.name}</td>
                  <td>
                    <button 
                      className="btn-icon edit-btn" 
                      onClick={() => onEditClick(group)}
                    >
                      <FaEdit />
                    </button>
                  </td>
                  <td>
                    <button 
                      className="btn-icon delete-btn" 
                      onClick={() => onDeleteClick(group.id)}
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="no-data">No groups found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;