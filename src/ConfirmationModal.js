import React from 'react';
import './ConfirmationModal.css';

const ConfirmationModal = ({ message, onClose }) => {
  // message -> String  -> Phrase qu'affichera le modal
  // onClose -> Function -> Fonction relié au bouton permettant de fermer le modal
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        {/* Message afficher dans le modal */}
        <div className="modal-button">
          <button onClick={onClose}>Close</button> 
          {/* Bouton permettant de fermer le modal */}
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;