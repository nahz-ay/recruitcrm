import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./editusermodal.module.scss";

function EditUserModal({ isOpen, onRequestClose, userDetails, onSave }) {
  const [formData, setFormData] = useState(userDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit User Details"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <h2 className={styles.modalheader}>Edit User Details</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        {Object.keys(userDetails).map((key) => (
          <div key={key} className={styles.formGroup}>
            <label htmlFor={key}>{key.replace(/([A-Z])/g, " $1")}</label>
            <input
              type="text"
              id={key}
              name={key}
              value={formData[key]}
              onChange={handleChange}
            />
          </div>
        ))}
        <div className={styles.btnsDiv}>
        <button type="submit" className={styles.saveButton}>
          Save
        </button>
        <button type="button" onClick={onRequestClose} className={styles.cancelButton}>
          Cancel
        </button>
        </div>
       
      </form>
    </Modal>
  );
}

export default EditUserModal;
