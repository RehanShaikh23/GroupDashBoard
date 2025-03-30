import React from 'react';

function DeleteConfirmation({ onConfirm, onCancel, errorMessage }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Confirm Delete</h3>
        <p>Are you sure you want to delete this group?</p>
        {errorMessage && (
          <div className="error-message">{errorMessage}</div>
        )}
        <div className="modal-actions">
          <button className="btn btn-danger" onClick={onConfirm}>Delete</button>
          <button className="btn btn-secondary" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmation;