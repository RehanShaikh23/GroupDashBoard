import React, { useState, useEffect } from 'react';

function EditGroupForm({ group, onSubmit, onCancel, errorMessage }) {
  const [groupName, setGroupName] = useState('');

  useEffect(() => {
    if (group) {
      setGroupName(group.name);
    }
  }, [group]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(groupName);
  };

  return (
    <div className="content-view">
      <h2>Edit Group Name:</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="Enter Group Name" 
            className="form-input"
          />
          {errorMessage && (
            <div className="error-message">{errorMessage}</div>
          )}
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">Update</button>
            <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditGroupForm;