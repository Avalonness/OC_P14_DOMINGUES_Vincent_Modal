import React from 'react';
import './ConfirmationModal.css';

const ConfirmationModal = ({ message, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <div className="modal-button">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;