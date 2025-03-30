import React, { useState } from 'react';

function AddGroupForm({ onSubmit, onCancel, errorMessage }) {
  const [groupName, setGroupName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(groupName);
  };

  return (
    <div className="content-view">
      <h2>Enter Group Name:</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="Enter Unique Group Name" 
            className="form-input"
          />
          {errorMessage && (
            <div className="error-message">{errorMessage}</div>
          )}
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">Add Group</button>
            <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddGroupForm;